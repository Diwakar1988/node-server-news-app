const fs = require('fs');
const path = require('path');
 
const processRoutePath = (router,dirPath) => {
    console.info("*********** REGISTER ALL API ENDPOINTS ***********");
    processDirectories(router,'', dirPath, dirPath);
    console.info("*********** ALL API ENDPOINTS REGISTERED ***********");
}

function processDirectories(router,route,dirPath,ignoreFilesDirPath){
    
    fs.readdirSync(dirPath).forEach(file => {
        const filepath = path.join(dirPath, file);

        const stat= fs.statSync(filepath);
        if (stat.isDirectory()) {            
            processDirectories(router,route+'/'+file,filepath);
        } 
        else if (file == 'index.js' && dirPath != ignoreFilesDirPath){
            router.use(route, require(dirPath));
            console.log('API: '+ route);
        }
    });
}

module.exports = processRoutePath;