const fs = require('fs').promises;

module.exports = {

    listImgs : async function (path) {
        
        let imgs = await fs.readdir(path);

        return imgs;
        
    },
    
    listFiles : async function (diretorio, arquivos) {
        
        if(!arquivos)
        arquivos = [];
        
        let listaDeArquivos = await fs.readdir(diretorio);
        
        for(let k in listaDeArquivos) {
            let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
            if(stat.isDirectory())
            await listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
            else
            arquivos.push(diretorio + '/' + listaDeArquivos[k]);
        }
        
        return arquivos;
        
    }
    
};
