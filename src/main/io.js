import { path } from 'path';

import { open } from 'open';
const os = require('os');
const fs = require('fs-extra');
console.log(os.homedir());


let data = {
  id: 0,
  name: 'Informe numero 1',
  data: [
    {
      nombre: 'primer formulario',
      campo1: 'data1',
      campo2: 'data2',
      campo3: 'data3',
      campo4: 'data4',
      campo5: 'data5'
    }
  ]
};


// Hacmos check de que la carpeta exista y si no la creamos
const dataFolder = `${__dirname}/data-app`;
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder)
}

const fileName = '/data1.json'


// Escribir data
if (!fs.existsSync(dataFolder + fileName)) {
  fs.writeFileSync(dataFolder + fileName, JSON.stringify(data))
}

// Leer data
console.log('aca');
if (fs.existsSync(dataFolder + fileName)) {
  console.log('read');
  let rawdata = fs.readFileSync(dataFolder + fileName);
  let student = JSON.parse(rawdata);
  console.log(student);
}


