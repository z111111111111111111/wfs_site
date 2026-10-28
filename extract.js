const fs = require('fs');
const html = fs.readFileSync('D:\\تحدي 4000 دولار\\بي دي اف\\ومن الصفر تقدر توصل - كتاب كامل ومُوسّع (مكتمل).html', 'utf8');
const sections = html.split('<section class="page">');
console.log('Total sections:', sections.length);
for (let i = 1; i < sections.length; i++) {
  const match = sections[i].match(/<h1[^>]*>(.*?)<\/h1>/);
  if (match) {
    console.log(i + ':', match[1].replace(/<[^>]*>/g, ''));
  }
}
