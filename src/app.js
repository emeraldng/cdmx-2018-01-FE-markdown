//console.log(process.argv);
const fs = require ('fs');
//const path = require('path');
const filepath = ('../PRUEBA.md');

const readFileAsync = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
};

readFileAsync(filepath)
    .then((contents) =>{
        console.log(contents);
    })
    .catch((err) =>{
        console.log('err!');
        
    });


































