const fs = require('fs');


fs.readFile('../.md', 'utf8', (error, data) => {
    let content = data;
    if (error) {
        console.log(`Error ${error}`);
    } else {
    //console.log(content);
        const resarrs = content.split('\r\n');
        //console.log(resarrs);
        const strStr = resarrs.filter(resarr => {
            return resarr.includes('(http');
        });
        console.log(strStr);
        // for (const x of strStr) {
        //     if (x.length === 0) break;
        //     console.log(x);
        //}
    }
});

<<<<<<< HEAD
const linkarr = (content) =>{
    let regex = /^http[s]?://\w[\.\w]+$/i;
    let matchstr = content.match(regex);
    let url = matchstr;
    console.log(url);
    //iteratorarr(url);

};

// const iteratorarr = (url) =>{
//   let arrstatus = [{
//       'url': `${url}`,

//   }];

// }
=======
// var txt = 'herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos';
// var newTxt = txt.split('(');
// var arrPseudoUrls = [];
// //console.log(newTxt);

// for (var i = 1; i < newTxt.length; i++) {
//     var pseudoURL = newTxt[i].split(')')[0];
//     arrPseudoUrls.push(pseudoURL);
//     console.log(arrPseudoUrls);
// }
>>>>>>> 84b0269b407a1dde2e2acb65c31effaa166ed665
