import sys

p = r'D:\wfs_site\src\data\chapters.ts'
with open(p, encoding='utf-8') as f:
    c = f.read()

c2 = c.replace('`', '"')
with open(p, 'w', encoding='utf-8') as f:
    f.write(c2)

print('done')
