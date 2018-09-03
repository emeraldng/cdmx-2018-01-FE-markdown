const fs = require('fs');


fs.readFile('../PRUEBA.md', 'utf8', (error, data) => {
    let content = data;
    if (error) {
        console.log(`Error ${error}`);
    } else {
    //console.log(content);
        let resarr = content.split('\r\n');
        //console.log(resarr);
        
        linkarr(resarr);
    }

});

const linkarr = (resarr) => {
    let newtxts = [];
    for(let i=0; i<resarr.length; i++){
        let newTxt = resarr[i].split(')')[0];
        newtxts.push(newTxt);
        
        
    }
    console.log(newtxts);



};
