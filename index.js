const fs = require('fs');

let file = fs.readFileSync('./input/exple.txt', 'utf8');

let firstInputRow = file.split('\n')[0];
let rowsNbr = firstInputRow.split(' ')[0];
let colNbr = firstInputRow.split(' ')[1];
let tomNbr = firstInputRow.split(' ')[2];
let mushNbr = firstInputRow.split(' ')[3];
console.log(`rowsNbr: ${rowsNbr}`);
console.log(`colNbr: ${colNbr}`);
console.log(`tomNbr: ${tomNbr}`);
console.log(`mushNbr: ${mushNbr}`);

fs.writeFileSync('./output/exple.txt',mushNbr, 'utf8');
