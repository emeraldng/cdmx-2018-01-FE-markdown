// // //console.log(process.argv);
// // const fs = require('fs');
// // //const path = require('path');
// // const filepath = ('../PRUEBA.md');


// // fs.readFileAsync = (filepath) => {
// //     return new Promise
// //     ((resolve, reject) => {
// //         fs.readFile(filepath, 'utf8', (err, data) => {
// //             if (err) {
// //                 console.log('err');
// //             } else {
// //                 const mkdata = data;
// //                 resolve(mkdata);
// //             }
// //         });                                                                                                                                                                                                                                              
// //     });
// // };


// // const separateByLineBreak = (mkdata) => {
// //     return new Promise
// //     ((resolve, reject) => {
// //         separator (mkdata) => {
// //         if(mkdata) {
// //         const lines = mkdata.split('\r\n');
// //         const semiLink = lines.filter(str =>{
// //         return (str.includes('http'));
// //     });
// //     return Promise.resolve(semiLink);s
// // };

// // const filterHtpp = (separateByLineBreak, semiLink) => {
// //     semiLink.forEach(function(e){
// //         console.log(e.substring(e.lastIndexOf('(') + 1, e.lastIndexOf(')')));
// //     });
// // };
    
    
    


// fs.readFileAsync(filepath)
//     .then(separateByLineBreak)
//     .then(fulfilled => console.log(fulfilled))
//     .then(() => filterHttp(semiLink))
//     .then(fulfilled => console.log(fulfilled))
//     .catch(error => console.log(error.message));
