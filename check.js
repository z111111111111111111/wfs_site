const fs = require('fs');
const c = fs.readFileSync('D:\\wfs_site\\src\\data\\chapters.ts','utf8');
console.log(c.split('`').length);
