/**
 * Generate project icon illustrations via Replicate Flux 1.1 Pro
 * Same visual language as Gertruda avatars (watercolor/storybook)
 *
 * Usage: REPLICATE_API_TOKEN=xxx node scripts/generate-project-icons.cjs [name|all]
 * Output: public/images/project-icons/{name}.webp
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error('Error: REPLICATE_API_TOKEN not set');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'project-icons');

// Style prefix matching Gertruda watercolor/storybook language
const STYLE = 'Warm watercolor storybook illustration, muted earthy tones with golden amber accents, loose painterly brushstrokes, soft edges, delicate translucent layers, white paper background, hand-drawn quality, no text, no words, no lettering, no watermark, centered composition, single subject';

const ICONS = {
  barnes: {
    prompt: `${STYLE}, a small medieval Portuguese stone castle tower with crenellations, vine leaves growing on the walls, warm bordeaux and sage green watercolor washes, fairy tale fortress`,
  },
  padel: {
    prompt: `${STYLE}, a padel tennis racket with round perforated head and short handle, a padel ball beside it, sage green and warm earth tones, sporty yet organic feel`,
  },
  setubal: {
    prompt: `${STYLE}, a bottlenose dolphin leaping out of the water with a joyful arc, water splashing beneath, soft sage green and ocean blue watercolor washes with golden amber highlights, coastal Portuguese atmosphere, Sado estuary wildlife`,
  },
  cogumelos: {
    prompt: `${STYLE}, a wild forest mushroom with a round dome cap, fallen autumn leaves around the base, rich sage green and warm earth brown watercolor washes, botanical illustration feel, forest floor atmosphere`,
  },
  tarot: {
    prompt: `${STYLE}, a mystical golden crescent moon with delicate small stars scattered around it, soft purple and bordeaux watercolor washes with golden accents on white paper, folk mysticism, clean white background`,
  },
};

const DELAY_MS = 12000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function apiRequest(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.replicate.com',
      path: urlPath,
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
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
    const proto = url.startsWith('https') ? https : require('http');
    proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function pollPrediction(id) {
  const maxAttempts = 120;
  for (let i = 0; i < maxAttempts; i++) {
    const { body } = await apiRequest('GET', `/v1/predictions/${id}`);
    if (body.status === 'succeeded') return body;
    if (body.status === 'failed' || body.status === 'canceled') {
      throw new Error(`Prediction ${id} ${body.status}: ${body.error || 'unknown'}`);
    }
    await sleep(5000);
  }
  throw new Error(`Prediction ${id} timed out`);
}

async function generateIcon(name, config) {
  console.log(`\n[${name}] Generating...`);
  console.log(`  Prompt: ${config.prompt.substring(0, 100)}...`);

  const { status, body } = await apiRequest('POST', '/v1/models/black-forest-labs/flux-1.1-pro/predictions', {
    input: {
      prompt: config.prompt,
      aspect_ratio: '1:1',
      output_format: 'webp',
      output_quality: 75,
      safety_tolerance: 5,
    },
  });

  if (status === 429) {
    const retryAfter = body.detail?.match(/(\d+)/)?.[1] || 15;
    console.log(`  Rate limited. Waiting ${retryAfter}s...`);
    await sleep((parseInt(retryAfter) + 2) * 1000);
    return generateIcon(name, config);
  }

  if (status !== 201 && status !== 200) {
    throw new Error(`API error ${status}: ${JSON.stringify(body)}`);
  }

  let result = body;
  if (body.status !== 'succeeded') {
    console.log(`  Prediction ${body.id} — polling...`);
    result = await pollPrediction(body.id);
  }

  const imageUrl = result.output;
  if (!imageUrl) throw new Error(`No output for ${name}`);

  const dest = path.join(OUTPUT_DIR, `${name}.webp`);
  await downloadFile(typeof imageUrl === 'string' ? imageUrl : imageUrl[0], dest);

  const stats = fs.statSync(dest);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  Saved: ${name}.webp (${sizeKB}KB)`);

  return { name, sizeKB };
}

async function main() {
  const arg = process.argv[2] || 'all';
  let iconsToGenerate;

  if (arg === 'all') {
    iconsToGenerate = Object.entries(ICONS);
  } else if (ICONS[arg]) {
    iconsToGenerate = [[arg, ICONS[arg]]];
  } else {
    console.error(`Unknown icon: ${arg}`);
    console.error(`Available: ${Object.keys(ICONS).join(', ')}, all`);
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`Generating ${iconsToGenerate.length} project icon(s)...`);
  console.log(`Output: ${OUTPUT_DIR}`);

  const results = [];

  for (let i = 0; i < iconsToGenerate.length; i++) {
    const [name, config] = iconsToGenerate[i];

    try {
      const result = await generateIcon(name, config);
      results.push(result);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      results.push({ name, error: err.message });
    }

    if (i < iconsToGenerate.length - 1) {
      console.log(`  Waiting ${DELAY_MS / 1000}s (rate limit)...`);
      await sleep(DELAY_MS);
    }
  }

  console.log('\n--- Results ---');
  for (const r of results) {
    if (r.sizeKB) {
      console.log(`  OK: ${r.name}.webp (${r.sizeKB}KB)`);
    } else {
      console.log(`  FAIL: ${r.name} — ${r.error}`);
    }
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
