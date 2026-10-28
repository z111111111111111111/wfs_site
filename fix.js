const fs = require('fs');
const p = 'src/data/chapters.ts';
let c = fs.readFileSync(p, 'utf8');
const before = c;
c = c.replace(/pnpm/g, 'npm');
if (before !== c) {
  fs.writeFileSync(p, c);
  console.log('replaced');
} else {
  console.log('none');
}
