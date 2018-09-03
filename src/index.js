const fs = require('fs');


fs.readFile('../PRUEBA.md', 'utf8', (error, data) => {
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
    }
});
