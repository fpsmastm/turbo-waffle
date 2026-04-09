import fs from 'node:fs';
import path from 'node:path';

const roots = ['src', '.', 'scripts'];
const allowedExtensions = new Set(['.js', '.svelte', '.css', '.html', '.json', '.md']);
const skipDirs = new Set(['.git', 'node_modules', 'dist']);

const markerPatterns = [/^<<<<<<<\s/m, /^=======$/m, /^>>>>>>>\s/m];
const hitFiles = new Set();

function shouldScan(filePath) {
  return allowedExtensions.has(path.extname(filePath));
}

function hasConflictMarkers(content) {
  return markerPatterns.some((pattern) => pattern.test(content));
}

function scanDir(dirPath) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) scanDir(fullPath);
      continue;
    }

    if (!shouldScan(fullPath)) continue;

    const content = fs.readFileSync(fullPath, 'utf8');
    if (hasConflictMarkers(content)) hitFiles.add(fullPath);
  }
}

for (const root of roots) {
  if (fs.existsSync(root)) scanDir(root);
}

if (hitFiles.size > 0) {
  console.error('\n❌ Merge conflict markers found in:');
  for (const file of hitFiles) console.error(` - ${file}`);
  console.error('\nResolve conflict blocks then rerun build.\n');
  process.exit(1);
}

console.log('✅ No merge conflict markers found.');
