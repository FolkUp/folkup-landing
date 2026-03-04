/**
 * Generate fornit avatar illustrations via Replicate Flux 1.1 Pro
 *
 * Usage: REPLICATE_API_TOKEN=xxx node scripts/generate-fornits.cjs [name|all]
 * Examples:
 *   node scripts/generate-fornits.cjs alice
 *   node scripts/generate-fornits.cjs all
 *
 * Output: public/images/team/{name}.webp (512x512)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error('Error: REPLICATE_API_TOKEN not set');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'team');

// Unified style prefix — soft watercolor, craft texture, warm brand tones
const STYLE = 'soft watercolor illustration on warm ivory parchment background, craft paper texture, warm muted tones of bordeaux and sage green with golden amber accents, centered composition, single focal point';

const FORNITS = {
  alice: {
    prompt: `${STYLE}, silhouette of a young woman standing before an ornate oval mirror, amber light reflecting from the mirror surface, sage green moss around the mirror frame, mysterious and contemplative mood`,
  },
  gonzo: {
    prompt: `${STYLE}, silhouette of a figure wearing a vintage gas mask with a glowing amber lens, surrounded by soft misty fog, bordeaux and sage tones, mysterious stalker atmosphere, industrial and organic mix`,
  },
  cooper: {
    prompt: `${STYLE}, a wise owl perched on a gnarled branch, glowing amber eyes as focal point, dark bordeaux shadows behind, sage green leaves, watchful and mysterious, detailed feather texture in watercolor`,
  },
  lantern: {
    prompt: `${STYLE}, a single floating wrought iron street lantern glowing warm amber light, suspended in air with soft light rays emanating outward, ethereal and weightless, warm and inviting glow, empty space around`,
  },
  lev: {
    prompt: `${STYLE}, silhouette of a figure reading behind an open ancient book, an ornate key held in one hand, stone library arch in background, bordeaux leather binding, sage green ivy on stone, scholarly and protective`,
  },
};

const MODEL_URL = 'https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions';

function makeRequest(url, options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          reject(new Error(`Parse error: ${data.slice(0, 200)}`));
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function generate(name) {
  const fornit = FORNITS[name];
  if (!fornit) {
    console.error(`Unknown fornit: ${name}. Available: ${Object.keys(FORNITS).join(', ')}`);
    return null;
  }

  console.log(`\n[${name}] Generating...`);
  console.log(`  Prompt: ${fornit.prompt.slice(0, 100)}...`);

  const { status, data } = await makeRequest(
    MODEL_URL,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
    {
      input: {
        prompt: fornit.prompt,
        width: 512,
        height: 512,
        output_format: 'webp',
        output_quality: 75,
        safety_tolerance: 5,
        prompt_upsampling: false,
      },
    }
  );

  if (status !== 201) {
    console.error(`  Error: ${status}`, JSON.stringify(data).slice(0, 200));
    return null;
  }

  // Poll for result
  const pollUrl = data.urls?.get;
  if (!pollUrl) {
    console.error('  No poll URL');
    return null;
  }

  let result = data;
  while (result.status !== 'succeeded' && result.status !== 'failed') {
    await new Promise((r) => setTimeout(r, 2000));
    const poll = await makeRequest(pollUrl, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    result = poll.data;
    process.stdout.write('.');
  }

  if (result.status === 'failed') {
    console.error(`\n  Failed: ${result.error}`);
    return null;
  }

  const imageUrl = result.output;
  if (!imageUrl) {
    console.error('\n  No output URL');
    return null;
  }

  const outPath = path.join(OUTPUT_DIR, `${name}.webp`);
  await downloadFile(imageUrl, outPath);
  const size = fs.statSync(outPath).size;
  console.log(`\n  Saved: ${outPath} (${(size / 1024).toFixed(1)} KB)`);
  return outPath;
}

async function main() {
  const arg = process.argv[2] || 'all';

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const names = arg === 'all' ? Object.keys(FORNITS) : [arg];
  const results = [];

  for (const name of names) {
    const result = await generate(name);
    results.push({ name, path: result });
  }

  console.log('\n--- Summary ---');
  for (const r of results) {
    console.log(`  ${r.name}: ${r.path ? 'OK' : 'FAILED'}`);
  }
}

main().catch(console.error);
