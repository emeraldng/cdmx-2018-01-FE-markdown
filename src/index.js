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
    let regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    let matchstr = content.match(regex);
    let url = matchstr;
    console.log(url);
};

