const folder = 'C:\\User\\Documents';
const fs = require('fs')
const path = require('path');

fs.readdir(folder, (err, files)=> {
    if(err) throw err;

    files.forEach(file => {
        console.log(file);
        let fullpath = path.join(folder, file);
        console.log(fullpath);
        let extension = path.extname(fullpath);

        const extensionName = extension.substring(1);
        console.log("extname " + extensionName);

        if (!fs.existsSync(folder + `\\sorted_${extensionName}\\`)){
            fs.mkdirSync(folder + `\\sorted_${extensionName}\\`);
        }

        fs.rename(fullpath, folder+`\\sorted_${extensionName}\\` +file, (err)=>{
            if(err) throw err;
            console.log('renamed file ' + file);

        });
    })
})
