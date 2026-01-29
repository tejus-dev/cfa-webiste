import fs from 'fs';
import path from 'path';

const galleryDir = './public/gallery';
const outputFile = './src/app/pages/gallery/gallery-images.ts';

const files = fs.readdirSync(galleryDir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

const items = files.map((file, i) => ({
  src: `/gallery/${file}`,
  title: i < 8 ? 'Campus' : i < 16 ? 'Classrooms' : 'Events',
}));

const content = `// AUTO-GENERATED FILE — DO NOT EDIT
export const GALLERY_IMAGES = ${JSON.stringify(items, null, 2)} as const;
`;

fs.writeFileSync(outputFile, content);

console.log(`✅ Generated ${files.length} gallery images`);
