const fs = require('fs').promises;
const xml2js = require('xml2js');

module.exports = {

    listTemp : async function (path) {
        
        let temp = await fs.readdir(path);

        return temp;
        
    },
    
    convert : async function (diretorio) {
        
        let teste;
        let temps = await fs.readFile(diretorio, "utf-8");

        await xml2js.parseString(temps, (err, result) => {
            if (err) {
                throw err;
            }
            // console.log("result");
            // console.log(result);
            
            // console.log("String");
            // console.log(JSON.stringify(result, null, 4));

            teste = result;
        });

        return teste;
        
    }
    
};
