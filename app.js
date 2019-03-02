const fs = require('fs');
for (let index = 2; index < 7; index++) {
  let file = fs.readFileSync(`./input/${process.argv[index]}.txt`, 'utf8');

  let firstInputRow = file.split('\n')[0];

  /*for (let i = 0; i < file.split('\n').length; i++) {
    if (file.split('\n')[i].split(' ')[0] == 'H') {
      hLines = [...hLines, i];
    } else if (file.split('\n')[i].split(' ')[0] == 'V'){
      vLines = [...vLines, i];
    }
    
  }
  */

  let hLines = file.split('\n')
    .map((_item, _key) => {
      return [_item, _key]
    })
    .filter((line, key) => {
      return line[0].split(' ')[0] == 'H'
    })
    .map((item, indice) => {
      return item[1]-1
    })

  let hStrLines = '';
  if (hLines.length > 0) {
    hStrLines = hLines
      .reduce((resH, currentLine) => {
        return `${resH}\n${currentLine}`
      })
  }

  //console.log(hLines);

  let vLines = file.split('\n')
    .map((_item, _key) => {
      return [_item, _key]
    })
    .filter((line$, key) => {
      return line$[0].split(' ')[0] == 'V'
    })
    .map((item$, indice$) => {
      return item$[1]-1
    })
    

  let vStrLines = '';
  if (vLines.length > 0) {
    vStrLines = vLines
      .reduce((resV, currentLine$, currentIndex$) => {
        if (currentIndex$ % 2 === 0) {
          return `${resV}\n${currentLine$}`
        } else {
          return `${resV} ${currentLine$}`
        }
      })
  }

  console.log(vStrLines);

  let res = '';
  /*if (condition) {

  }*/
  if (hLines.length > 0 && vLines.length === 0) {
    res = `${hLines.length + vLines.length / 2}\n${hStrLines}`
  }
  if (vLines.length > 0 && hLines.length === 0) {
    res = `${hLines.length + vLines.length / 2}\n${vStrLines}`
  }
  if (hLines.length > 0 && vLines.length > 0) {
    res = `${hLines.length + vLines.length / 2}\n${hStrLines}\n${vStrLines}`
  }
  
  fs.writeFileSync(`./output/${process.argv[index]}.txt`, res.split('EOF')[0], 'utf8')

}
