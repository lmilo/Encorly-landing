// Convierte los PNG de mockups y logos a WebP. Uso: node scripts/to-webp.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIRS = ['src/assets/mockups', 'src/assets/logo'];

for (const dir of DIRS) {
  const files = await readdir(dir);
  for (const file of files) {
    if (extname(file).toLowerCase() !== '.png') continue;
    const input = join(dir, file);
    const output = input.replace(/\.png$/i, '.webp');
    const info = await sharp(input).webp({ quality: 82 }).toFile(output);
    console.log(`${file} → ${output.split('/').pop()} (${(info.size / 1024).toFixed(0)} KB)`);
  }
}
