import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const folder = 'reviews';
const files = ['RatingInput', 'Comment', 'ProductReviews', 'Rating', 'ReviewCard', 'SubmitReview'];

// Create folder if it doesn't exist
if (!existsSync(folder)) {
  mkdirSync(folder, { recursive: true });
}

// Create files with default content
files.forEach((file) => {
  const filePath = join(folder, `${file}.tsx`);
  if (!existsSync(filePath)) {
    const content = `// ${file} component

const ${file} = () => {
  return <div>${file}</div>;
};

export default ${file};
`;
    writeFileSync(filePath, content, 'utf8');
    console.log(`Created: ${filePath}`);
  } else {
    console.log(`Skipped (already exists): ${filePath}`);
  }
});

console.log('All files processed!');
