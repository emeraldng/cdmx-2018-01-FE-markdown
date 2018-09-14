// var fs = require('fs');

// new Promise((resolve,reject) => {
//     fs.readFile('../PRUEBA.md','utf-8',(err, data)=>{
//         if (err) {
//             reject(err); // Cachando el error.
//         }
//         else{
//             resolve(data);  // Contenido del archivo
             
//         }
//     });
// })
//     .then((data)=>{
//         const mkdata = data;  //Igualmos la data a una variable 
//         //console.log(mkdata);
//         dataIterator(mkdata); // Funciones que usan la 'data'    
//     })
//     .then({
//         filterHtts(sentence)
//     })
//     .catch((err)=>{
//         throw err; // Cachando el error.
//     });

// const dataIterator = (mkdata) => {
//     //separando las lineas por parrafo y salto de línea
//     var sentence = mkdata.split('\r\n');
//     console.log(sentence);
//     return Promise.resolve(sentence);
// };    

// const filterHtts = (mkdata, sentence) => {
//     //Del array generado, filtramos los parrafos que contienen 'http'
//     const semiLink = sentence.filter(str =>{
//         return (str.includes('http'));
//     });
//     return Promise.resolve(semiLink);
// };

// const getUrl = (semiLink) => {
//     return new Promise
// }



// fs.readFileAsync(filepath)
//     .then(dataIterator)
//     .then(fulfilled => console.log(fulfilled))
//     .catch(error => console.log(error.message));
