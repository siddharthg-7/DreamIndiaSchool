const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sizes = [
  { w: 480, h: 180 },
  { w: 768, h: 288 },
  { w: 1280, h: 480 },
  { w: 1920, h: 720 }
];

const sources = [
  'public/images/dis-banner-1.png',
  'public/images/dis-banner-3.png',
  'public/images/dis-banner-5.png'
];

async function generateFor(src) {
  const parsed = path.parse(src);
  const base = path.join(parsed.dir, parsed.name);
  if (!fs.existsSync(src)) {
    console.warn('source not found:', src);
    return;
  }

  for (const s of sizes) {
    const jpgOut = `${base}-${s.w}.jpg`;
    const webpOut = `${base}-${s.w}.webp`;

    await sharp(src)
      .resize(s.w, s.h, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82 })
      .toFile(jpgOut);

    await sharp(src)
      .resize(s.w, s.h, { fit: 'cover', position: 'centre' })
      .webp({ quality: 80 })
      .toFile(webpOut);

    console.log('wrote', jpgOut, webpOut);
  }
}

async function run() {
  for (const s of sources) {
    try {
      await generateFor(s);
    } catch (err) {
      console.error('failed', s, err);
    }
  }
}

run().then(() => console.log('done')).catch(console.error);
