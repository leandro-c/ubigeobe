export function splitOnlyFirstSpace(value) {
    const text = value.trim();
    const [code] = text.split(' ');
    const label = text.replace(`${code} `, '');
  
    return [code, label];
}
export function splitPlaces(value) {
    const text = value.trim();
    const departamento = text.trim().split('/')[0];
    const provincia = text.trim().split('/')[1];
    const distrito = text.trim().split('/')[2];
  
    return [departamento, provincia, distrito];
}
export function cities(data){
    const result = fileContent.split('\n').reduce((acc, line) => {
        const [departamento, provincia, distrito] = splitPlaces(line);
      
    
    }
}
/* 
const express = require('express')
const app = express()
const fs = require('fs')
const port = 3001

function splitOnlyFirstSpace(value) {
    const text = value.trim();
    const [code] = text.split(' ');
    const label = text.replace(`${code} `, '');
  
    return [code, label];
}

function splitPlaces(value) {
    const text = value.trim();
    const departamento = text.trim().split('/')[0];
    const provincia = text.trim().split('/')[1];
    const distrito = text.trim().split('/')[2];
  
    return [departamento, provincia, distrito];
}

app.get('/cities', (req, res) => {


    const fileContent = fs.readFileSync(__dirname + '/ubigeos.txt', 'utf8');
    console.log(fileContent.split('\n'));
    
  
  const result = fileContent.split('\n').reduce((acc, line) => {
    const [departamento, provincia, distrito] = splitPlaces(line);
  
    if (departamento) {
      const [departamentoCode, departamentoName] = splitOnlyFirstSpace(departamento);
      
      if (departamentoCode && departamentoName && !acc.departamento.filter(dep => dep.code === departamentoCode).length) {
        acc.departamento.push({
          code: departamentoCode,
          name: departamentoName,
          parentCode: null,
          parentName: null,
        });
      }
  
      if (provincia) {
        const [provinciaCode, provinciaName] = splitOnlyFirstSpace(provincia);
  
        if (provinciaCode && provinciaName && !acc.provincia.filter(dep => dep.code === provinciaCode).length) {
          acc.provincia.push({
            code: provinciaCode,
            name: provinciaName,
            parentCode: departamentoCode,
            parentName: departamentoName,
          });
        }
  
        if (distrito) {
          const [distritoCode, distritoName] = splitOnlyFirstSpace(distrito);
  
          if (distritoCode && distritoName && !acc.distrito.filter(dep => dep.code === distritoCode).length) {
            acc.distrito.push({
              code: distritoCode,
              name: distritoName,
              parentCode: provinciaCode,
              parentName: provinciaName,
            });
          }
        }
      }
    }
    return acc;
  }, {
    departamento: [],
    provincia: [],
    distrito: [],
  })
      res.json(result)
  })

*/