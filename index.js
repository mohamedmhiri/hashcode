const fs = require('fs');

let file = fs.readFileSync(`./input/${process.argv[2]}.txt`, 'utf8');


let firstInputRow = file.split('\n')[0];
let rowsNbr = firstInputRow;
let tags = [];
let slideNbr = 0;

let hIndex = [];
let vIndex = [];

let res = '';
let resH = '';
let resV = '';
for (var line = 0; line < file.split('\n').length-1; line++) {
    let type = file.split('\n')[line].split(' ')[0];
    if (type == 'H') {
        slideNbr++;
        hIndex.push(line-1)
        resH = `${resH}\n${line-1}`;
    } else if (type == 'V'){
        vIndex.push(line-1)
        if (vIndex.length == 2) {
            resV = `${resV}\n${vIndex[0]} ${vIndex[1]}`
            slideNbr++;
            vIndex = []
        }

    }
    //let tagNbr = file.split('\n')[line].split(' ')[1];

    /*    
    for (let key = 0; key < tagNbr; key++) {
        tags.push(file.split('\n')[line].split(' ')[key + 2]);
    }
    */
}
res = `${slideNbr}${resH}${resV}`;
console.log(res);



fs.writeFile(`./output/${process.argv[2]}.txt`, res.split('EOF')[0], 'utf8', (err, data) => {
    
});


