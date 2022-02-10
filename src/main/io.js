const os = require('os');
const fs = require('fs-extra');
console.log(os.homedir());


let data = {};


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
export var dataFile = '';
if (fs.existsSync(dataFolder + fileName)) {
  // console.log('read');
  let rawdata = fs.readFileSync(dataFolder + fileName);
  dataFile = JSON.parse(rawdata);
}


export const writeFile = (name, payload)  => {
  let fileName = `/${name}`;

  // Escribir data
  if (!fs.existsSync(dataFolder + fileName)) {
    fs.writeFileSync(dataFolder + fileName, JSON.stringify(payload))
  }
}
