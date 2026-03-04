/**
 * Generate Gertruda hero illustrations via Replicate Flux 1.1 Pro
 *
 * Usage: REPLICATE_API_TOKEN=xxx node scripts/generate-gertruda.cjs [style|all|new]
 * "new" = only styles 06-17 (skip existing 01-05)
 *
 * Output: public/images/gertruda/gertruda-{01..17}.webp
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error('Error: REPLICATE_API_TOKEN not set');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gertruda');

// Base description (no "FolkUp" text, no Midjourney params)
const BASE = 'an ornate wrought iron street lantern with glowing warm amber light, organic tree roots growing from its base spreading outward, muted bordeaux and sage green tones with golden amber accents, no text, no words, no lettering, no watermark';

const STYLES = {
  watercolor: {
    index: 1,
    prompt: `Watercolor illustration, ${BASE}, loose painterly brushstrokes, warm bordeaux and sage green washes, white paper background, gentle and organic, soft edges, delicate translucent layers`,
  },
  storybook: {
    index: 2,
    prompt: `Storybook fairy tale illustration, ${BASE}, whimsical roots with tiny leaves sprouting, soft golden sparkles around the light, cream background, enchanting and warm, children's book quality`,
  },
  botanical: {
    index: 3,
    prompt: `Botanical illustration style, ${BASE}, scientific precision, elaborate root system rendered like a botanical plate, vines with small leaves climbing the lantern post, ivory background, elegant and educational`,
  },
  hygge: {
    index: 4,
    prompt: `Cozy Scandinavian illustration, ${BASE}, friendly wrought iron lantern radiating soft warm light in the evening, comfortable organic roots suggesting home and community, soft shadows, clean white background, Scandinavian warmth, hygge atmosphere`,
  },
  detailed: {
    index: 5,
    prompt: `Detailed warm illustration, ${BASE}, rich details, warm and inviting like a craft pub sign, ivory background, hand-drawn quality, intricate metalwork on the lantern`,
  },
  // --- New styles: from primitive to futuristic ---
  sand: {
    index: 6,
    prompt: `Simple drawing traced with a stick in wet sand on a beach, ${BASE}, primitive lines scratched into sand surface, uneven strokes, natural sand texture, overhead view of sand drawing, golden beach sand color, minimal detail, raw and ephemeral`,
  },
  chalk: {
    index: 7,
    prompt: `Chalk drawing on a dark green blackboard, ${BASE}, white and colored chalk strokes, dusty texture, hand-drawn schoolboard style, smudged edges, chalk dust visible, educational feel, green chalkboard background`,
  },
  pencil: {
    index: 8,
    prompt: `Pencil sketch on white paper, ${BASE}, graphite pencil drawing, light hatching and cross-hatching, visible pencil strokes, sketch quality, soft shading, artist sketchbook page, minimal color just graphite gray, clean white paper background`,
  },
  woodcut: {
    index: 9,
    prompt: `Woodcut print illustration, ${BASE}, bold carved lines, linocut technique with visible cut marks, two-color print in deep bordeaux on cream paper, strong contrast, rustic and handmade, printmaking texture, folk art quality`,
  },
  inkwash: {
    index: 10,
    prompt: `Japanese sumi-e ink wash painting, ${BASE}, black ink on rice paper, wet brush strokes, zen minimalism, varying ink density from solid black to pale gray wash, East Asian brush painting technique, meditative and serene, white paper background`,
  },
  mosaic: {
    index: 11,
    prompt: `Ancient Roman mosaic tile art, ${BASE}, small square tesserae tiles, stone and glass pieces, classical mosaic technique, warm earth tones with amber and bordeaux tiles, grout lines visible between tiles, Byzantine influence, museum quality artifact`,
  },
  stainedglass: {
    index: 12,
    prompt: `Gothic stained glass window design, ${BASE}, lead came lines separating colored glass sections, translucent amber and bordeaux glass pieces, cathedral window style, light shining through colored glass, medieval craftsmanship, sacred geometry`,
  },
  papercut: {
    index: 13,
    prompt: `Paper cut silhouette art, ${BASE}, layered paper cutout in bordeaux and sage paper, sharp clean edges, shadow box depth effect, Chinese paper cutting influence, decorative negative space, handcraft quality, white background with subtle shadows between layers`,
  },
  retrogame: {
    index: 14,
    prompt: `16-bit pixel art sprite, ${BASE}, retro video game style, limited color palette with bordeaux and amber and sage, chunky pixels visible, SNES era quality, nostalgic gaming aesthetic, clean pixel grid, dark background`,
  },
  steampunk: {
    index: 15,
    prompt: `Steampunk illustration, ${BASE}, Victorian brass gears and cogs integrated into the lantern, copper pipes, steam wisps, clockwork mechanisms in the roots, aged metal patina, sepia and amber tones, industrial revolution meets botanical, parchment background`,
  },
  neon: {
    index: 16,
    prompt: `Neon sign glowing in the dark, ${BASE}, bright neon tubes in amber and bordeaux colors, electric glow against dark night background, neon light reflections, urban night atmosphere, buzzing neon light quality, glass tubes bent into lantern shape, dark background with neon glow halo`,
  },
  cyber: {
    index: 17,
    prompt: `Cyberpunk digital art, ${BASE}, holographic projection of lantern, glitch art effects, circuit board patterns in the roots, data stream particles floating upward instead of light, wireframe overlay, teal and amber digital palette with bordeaux accents, dark tech background, futuristic UI elements`,
  },
};

const DELAY_MS = 12000; // 12s between requests (rate limit: 6 req/min)

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
      // Follow redirects
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
  const maxAttempts = 120; // 10 min max
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

async function generateStyle(name, style) {
  console.log(`\n[${name}] Generating...`);
  console.log(`  Prompt: ${style.prompt.substring(0, 80)}...`);

  const { status, body } = await apiRequest('POST', '/v1/models/black-forest-labs/flux-1.1-pro/predictions', {
    input: {
      prompt: style.prompt,
      aspect_ratio: '1:1',
      output_format: 'webp',
      output_quality: 90,
      safety_tolerance: 5,
    },
  });

  if (status === 429) {
    const retryAfter = body.detail?.match(/(\d+)/)?.[1] || 15;
    console.log(`  Rate limited. Waiting ${retryAfter}s...`);
    await sleep((parseInt(retryAfter) + 2) * 1000);
    return generateStyle(name, style); // retry
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

  const filename = `gertruda-${String(style.index).padStart(2, '0')}.webp`;
  const dest = path.join(OUTPUT_DIR, filename);
  await downloadFile(typeof imageUrl === 'string' ? imageUrl : imageUrl[0], dest);

  const stats = fs.statSync(dest);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  Saved: ${filename} (${sizeKB}KB)`);

  if (sizeKB > 200) {
    console.log(`  WARNING: ${sizeKB}KB exceeds 200KB budget!`);
  }

  return { name, filename, sizeKB };
}

async function main() {
  const arg = process.argv[2] || 'all';
  let stylesToGenerate;

  if (arg === 'all') {
    stylesToGenerate = Object.entries(STYLES);
  } else if (arg === 'new') {
    stylesToGenerate = Object.entries(STYLES).filter(([, s]) => s.index >= 6);
  } else if (STYLES[arg]) {
    stylesToGenerate = [[arg, STYLES[arg]]];
  } else {
    console.error(`Unknown style: ${arg}`);
    console.error(`Available: ${Object.keys(STYLES).join(', ')}, all, new`);
    process.exit(1);
  }

  // Ensure output dir exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`Generating ${stylesToGenerate.length} Gertruda illustration(s)...`);
  console.log(`Output: ${OUTPUT_DIR}`);

  const results = [];

  for (let i = 0; i < stylesToGenerate.length; i++) {
    const [name, style] = stylesToGenerate[i];

    try {
      const result = await generateStyle(name, style);
      results.push(result);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      results.push({ name, filename: null, error: err.message });
    }

    // Delay between requests (except last)
    if (i < stylesToGenerate.length - 1) {
      console.log(`  Waiting ${DELAY_MS / 1000}s (rate limit)...`);
      await sleep(DELAY_MS);
    }
  }

  console.log('\n--- Results ---');
  for (const r of results) {
    if (r.filename) {
      console.log(`  OK: ${r.name} → ${r.filename} (${r.sizeKB}KB)`);
    } else {
      console.log(`  FAIL: ${r.name} — ${r.error}`);
    }
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
