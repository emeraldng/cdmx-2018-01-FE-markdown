//Primer manera, como lo hemos hecho hasta ahora


const suma = (num1, num2) =>{
    const resultSuma = num1 + num2;
    resta(9, resultSuma);
};

const resta = (num3, resultSuma) => {
    // console.log(num3, resultSuma)
    const resultResta = num3 - resultSuma;
    // console.log(resultResta)
    multi(resultSuma, resultResta);
};

const multi = (resultSuma,  resultResta) => {
    const resultMulti = resultResta * resultSuma;
    console.log(resultMulti);
}; 


// // Sedunda forma-------------------------------CallBacks



// // const resultSuma = suma(3,3)
// // const resultResta = resta(9, resultSuma)
// // const resultMulti = multi()
// // print()

// // console.log('resultado de la suma ' + resultSuma)
// // console.log('resultado de la resta ' + resultResta)
// // console.log('resultado de la multi ' + resultMulti)


// // Hasta donde vamos


// // const suma = (num1, num2) => {
// //   const resultSuma = num1 + num2
// //     return resultSuma
// // }


// // const resta = (num3, resultSuma) => {
// //   const resultResta = num3 - resultSuma
// //   return resultResta
// // }


// // const multi = () =>{
// //   return resultResta * resultSuma
// // }


// // function print () {
// //   const print = document.getElementById('app')
// //   const resultados =  `
// //   <p>El resultado de la suma es: ${resultSuma}</p>
// //   <p>El resultado de la resta es: ${resultResta}</p>
// //   <p>El resultado de la multiplicación es: ${resultMulti}</p>
// //   `  
// //   print.innerHTML = resultados
// // }

// // const resultSuma = suma(3,3)
// // const resultResta = resta(9, resultSuma)
// // const resultMulti = multi()
// // print()

// // console.log('resultado de la suma ' + resultSuma)
// // console.log('resultado de la resta ' + resultResta)
// // console.log('resultado de la multi ' + resultMulti)








// // ------------------------  Promesas

// // #basica

// // const promesa = new Promise((resolve, reject) => {
// //   if(true){
// //     resolve('Se resolvio correctamente')
// //   }else{
// //     reject('Ocurrio un error')
// //   }
// // })

// // promesa.then((response) => {
// //   console.log('Response: ', response)
// // }).catch((error) =>{
// //   console.log('Error: ', error)
// // })

// // # 2 con setTimeOut


// // const promesa = new Promise((resolve, reject) => {
// //   console.log('Cargando... ')
// //   setTimeout(() => {
// //     resolve('Promesa resuelta')
// //   }, 2000)
// //   setTimeout(() => {
// //     reject('Promesa fallada')
// //   }, 2500)
// // })

// // promesa.then((response) => {
// //   console.log('Response: ', response)
// // }).catch((error) =>{
// //   console.log('Error: ', error)
// // })



// // # 2 con Promise.all
// // const promesa1 = new Promise((resolve, reject)=>{
// //   resolve('promesa 1 resuelta exitosamente')
// // })
     
// // const promesa2 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve('promesa 2 resuelta exitosamente')
// //   }, 2500)
// // })

// // const promesa3 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     reject('promesa 3 tuvo un error inesperado')
// //   }, 1000)
// // })
// // const promesa4 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve('promesa 4 resuelta exitosamente')
// //   }, 1500)
// // })

// // promesa3.then(response=> console.log('respuesta de la 4;', response)).catch(error => error)


// // Promise.all([promesa1, promesa2, promesa3, promesa4])
// // .then((response)=> {
// //   console.log('Respuestas : ', response) 
// // })
// // .catch((error)=>{
// //   console.log('Ocurrio un error : ', error) 
// // })



// // # 2 con encadenadas

// // const promesa1 = new Promise((resolve, reject)=>{
// //   resolve('Primera exitosa')
// // })
// // const promesa2 = new Promise((resolve, reject)=>{
// //   resolve('Segunda exitosa')
// // })
// // const promesa3 = new Promise((resolve, reject)=>{
// //   resolve('Tercera exitosa')
// // })

// // promesa1.then(response=>  console.log(response), error => console.log('error'))

// // promesa1
// // .then(
// //   response => {
// //     console.log(response)
// //     return promesa2
// //   })
// // .then((valorSegundaPromesa)=>{
// //   console.log(valorSegundaPromesa)
// //   return promesa3
// // })
// // .then((valorTercerPromesa)=>{
// //   console.log(valorTercerPromesa)
// // })
// // .catch( 
// //   error => {
// //     console.log('Ocurrio un error', error)
// // })






// // --------------------------- Intentando resolver con promesas


// // const promesa = new Promise((resolve, reject) =>{
// //   const suma = (num1, num2) => {
// //     const resultSuma = num1 + num2
// //     return resultSuma
// //   }
// //   return resolve(suma(3,3))
// // })


// // function print () {
// //   const print = document.getElementById('app')
// //   const resultados =  `
// //   <p>El resultado de la suma es: ${resultSuma}</p>
// //   <p>El resultado de la resta es: ${resultResta}</p>
// //   <p>El resultado de la multiplicación es: ${resultMulti}</p>
// //   `  
// //   print.innerHTML = resultados
// // }


// // promesa
// //   .then((responseSuma) => {
// //     console.log('La suma es : ', responseSuma)
// //     const resta = (num3, resultSuma) => {
// //       const resultResta = num3 - resultSuma
// //       return resultResta
// //     }
// //     return resta(9, responseSuma)
// //   })
// //   .then((responseResta)=>{
// //     console.log('La resta es: ', responseResta)
// //     const multi = (responseSuma, responseResta) =>{
// //       return responseSuma * responseResta
// //     }
// //     return multi(responseResta, 6 )
// //   })
// //   .then((responseMulti) =>{
// //     console.log('resultado Multi: ' , responseMulti)
// //   }
// // )


// // const suma = (num1, num2) =>{
// //   return new Promise ((resolve, reject)=>{
// //     resolve(num1 + num2)
// //   })
// // }


// // suma(3,3).then((response)=>{
// //   console.log(response)
// // })


// // const suma = (num1, num2) =>{
// //   const resultadoSuma  = num1 + num2
// //   console.log(resultadoSuma)
// //   return resultadoSuma
// // }
// // const resta = (num1, resultSuma) =>{
// //   const resultadoResta  = num1 - resultSuma
// //   console.log(resultadoResta)
// //   return resultadoResta
// // }

// // const multi = () =>{
// //   const resultMulti  = resultSuma * resultadoResta
// //   console.log(resultMulti)
// //   return resultMulti
// // }

// // const resultSuma = suma(3 , 3)
// // const resultadoResta = resta(9, resultSuma)
// // multi()



// // const promesa = new Promise ((reject, resolve) => {
// //   if(false) {
// //     reject('Se resolvio mal')
// //   } else {
// //     resolve('No ocurio un problema')
// //   }
// // })

// // promesa.then(
// //   error => console.log('Error:',  error), 
// //   response => console.log('Response: ' , response)
// //   )

// // const promesa1 = new Promise((resolve, reject) =>{
// //   console.log('Cargando... ')
// //   setTimeout(()=>{
// //     console.log('Esta es la primer promesa')
// //   },4000)
// //   setTimeout(()=>{
// //     console.log('segunda funcion')
// //   },500)
// // })
// // promesa1.then((response)=>{
// //     console.log('Response: ', response)
// // }).catch((error)=>{
// //   console.log('Error: ', error)
// // })


// //  Promise.all([promesa3, promesa1,promesa4, promesa2, ])
// // .then((response) =>{
// //   console.log('Response :' , response)
// // }).catch((error) =>{
// //   console.log('Error: ', error)
// // })


// const promesa1 = new Promise((resolve, reject)=>{
//     resolve ('promesa 1 resuelta');
// });
// const promesa2 = new Promise((resolve, reject)=>{
//     resolve ('promesa 2 resuelta');
// });
// const promesa3 = new Promise((resolve, reject)=>{
//     resolve ('promesa 4 resuelta');  
// });
   
// const promesa4 = new Promise((resolve, reject)=>{
//     reject ('mal todo mal ');
   
// });
   
   
// promesa1
//     .then((response) => {
//         console.log(response);
//         return promesa2;
//     })
//     .then((valorPromesa2) =>{
//         console.log(valorPromesa2);
//         return promesa3;
//     })
//     .then((valorPromesa3) => {
//         console.log(valorPromesa3);
//         return promesa4;
//     })
//     .then((valorPromesa4) => {
//         console.log(valorPromesa4);
//     })
//     .catch((error) =>{
//         console.log('Error', error);
//     });