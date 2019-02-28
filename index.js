const fs = require('fs');

let file = fs.readFileSync('./input/exple.txt', 'utf8');

let firstInputRow = file.split('\n')[0];
let rowsNbr = firstInputRow.split(' ')[0];
let colNbr = firstInputRow.split(' ')[1];
let minNbrIngredients = firstInputRow.split(' ')[2];
let maxTotalCellsNbr = firstInputRow.split(' ')[3];
console.log(`rowsNbr: ${rowsNbr}`);
console.log(`colNbr: ${colNbr}`);
console.log(`minNbrIngredients: ${minNbrIngredients}`);
console.log(`maxTotalCellsNbr: ${maxTotalCellsNbr}`);

fs.writeFileSync('./output/exple.txt', maxTotalCellsNbr, 'utf8');
