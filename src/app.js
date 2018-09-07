//console.log(process.argv);
const fs = require ('fs');
//const path = require('path');
const filepath = ('../PRUEBA.md');

fs.readFileAsync = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if(err){ 
                reject(err);}
            else{
                const mkdata = data;
                resolve(mkdata);}
        });
    });
};

const separateByLineBreak = (mkdata) => {
    const separator = mkdata.split('\r\n');
    return separator; 
};



fs.readFileAsync(filepath)
    .then((mkdata) =>{
        //console.log(mkdata);
        separateByLineBreak(mkdata);
        console.log(separateByLineBreak);
    })
    .catch((err) =>{
        console.log('err!');
        
    });