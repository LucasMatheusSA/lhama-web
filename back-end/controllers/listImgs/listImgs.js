const config = require('../../app-config');
const service = require('../../service/service-imgs');

const directory = config.path_images;

module.exports = async (req, res, err) => {
    
    let pag = req.body.pag ;
    let qtd = req.body.qtd ;

    let data = await service.listImgs(directory);
    let listReturn = [];

    if(pag <= parseInt( data.length / qtd ) + 1){
        let first = (qtd * pag);
        let last = data.length - first >= qtd ? first + qtd : data.length - first;

        for(i = first ; i < last ; i++){
            listReturn.push(data[i]);
        }

        res.status(200).json({ list: listReturn , all: data.length , first: first , last: last - 1});

    }

    res.status(500).json({ error: "Erro na paginação." });

}