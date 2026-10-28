const fs = require('fs');
const p = 'D:\\wfs_site\\src\\data\\chapters.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/`npm run dev`/g, '"npm run dev"');
c = c.replace(/`([^`]+)`/g, (m, g1) => {
  // don't replace inside code blocks? but just in case
  return '"' + g1.replace(/"/g, '\\"') + '"';
});
fs.writeFileSync(p, c);
console.log('done');
