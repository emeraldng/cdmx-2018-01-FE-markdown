const fs = require('fs');
// var showdown  = require('showdown');
// let converter = new showdown.Converter(),
//  text = ;
//  html = converter.makeHtml(text);
    
//const https = require('https');
// let filepath = 'README.html';

fs.readFile('../README.md', 'utf8', (error, data) =>{
    let content = data;
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(content);
        linkarr(content);
    }
    
});

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
