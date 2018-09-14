//console.log(process.argv);
const fs = require('fs');
const fetch = require('node-fetch');
//const path = require('path');
const filepath = ('../README.md');

//Se inicializa la funcion con el constructor de una nueva promesa.
fs.readFileAsync = (filepath) => {
    return new Promise
    ((resolve) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                console.log('err');
            } else {
                //al leer el archivo se guarda en un variable la data extraída
                const mkdata = data;
                resolve(mkdata);
            }
        });                                                                                                                                                                                                                                              
    });
};

const separateByLineBreak = (mkdata) => {
    //se declara una nueva promesa que será retornada
    return new Promise
    ((resolve) => {
        const arrlinks = []; //array final
        const objLinks = {link:'', status:''};  //array de objetos con las propiedades de los links.
        
        const lines = mkdata.split('\r\n'); 
        //separamos el archivo por tabulación y salto de línea. Cada parrafo será un str de un array.
        const semiLink = lines.filter(str =>{
            return (str.includes('http')); //de los str obtenidos, filtramos los que contengan 'http'.
        });
        const myArrayHtt = semiLink.map((e) => {
            return (e.substring(e.lastIndexOf('(') + 1, e.lastIndexOf(')'))); //extraemos el str dentro de '()'
        });
        resolve(myArrayHtt); //array con URLs extraídas
          
        // for (let i=0; i<myArrayHtt.length; i++) {  
        //     fetchRequest(myArrayHtt[i], arrayURL[i])  //Recoriendo el array con URL y haciendo fecth.
        //         .then((objeto) => {
        //             fetchPetions.push(objeto);
                    
        //         });
        // }

    });
     
};

fs.readFileAsync(filepath)
    .then(separateByLineBreak)
    .then(fulfilled => console.log(fulfilled))
    .then(() => filterHttp(semiLink))
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));

