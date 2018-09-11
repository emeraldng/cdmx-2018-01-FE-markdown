//console.log(process.argv);
const fs = require('fs');
//const path = require('path');
const filepath = ('../PRUEBA.md');


fs.readFileAsync = (filepath) => {
    return new Promise
    ((resolve) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                console.log('err');
            } else {
                const mkdata = data;
                resolve(mkdata);
            }
        });                                                                                                                                                                                                                                              
    });
};

const separateByLineBreak = (mkdata) => {
    return new Promise
    ((resolve) => {
        const lines = mkdata.split('\r\n');
        const semiLink = lines.filter(str =>{
            return (str.includes('http'));
        });
        resolve(semiLink);
        
    });
};

const filterHttp = (mkdata, semiLink) => {
    return new Promise
    ((resolve) => {
        const myArrayHtt = semiLink.map((e) => {
            return (e.substring(e.lastIndexOf('(') + 1, e.lastIndexOf(')')));
        });
        resolve(myArrayHtt);
    });
};

// var txt = 'herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos';
// var newTxt = txt.split('(');
// var arrPseudoUrls = [];
// //console.log(newTxt);

fs.readFileAsync(filepath)
    .then (
        response => {
            console.log(response);
            return separateByLineBreak;
        })
    .then(
        semiLink => {
            console.log(semiLink);
            return filterHttp;
        })
    .then(
        myArrayHtt => {
            console.log(myArrayHtt);
        })
    .catch(
        error => {
            console.log('error', error);
        });

// const separateByLineBreak = (mkdata) => {
//     const lines = mkdata.split('\r\n');
//     const semiLink = lines.filter(str =>{
//         return (str.includes('http'));
//     });
//     return Promise.resolve(semiLink);
// };

// const filterHtpp = (separateByLineBreak, semiLink) => {
//     semiLink.forEach(function(e){
//         console.log(e.substring(e.lastIndexOf('(') + 1, e.lastIndexOf(')')));
//     });
// };


// fs.readFileAsync(filepath)
//     .then(separateByLineBreak)
//     .then(fulfilled => console.log(fulfilled))
//     .then(() => filterHttp(semiLink))
//     .then(fulfilled => console.log(fulfilled))
//     .catch(error => console.log(error.message));
