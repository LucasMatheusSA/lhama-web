const config = require('../../app-config');
const service = require('../../service/service-temp');

const directory = config.path_template;

module.exports = async (req, res) => {
    
    let temps = await service.listTemp(directory);
    let list = [];
    let listTemps = [];

    for(let i = 0; i < temps.length; i ++){
        list.push(await service.convert(directory + "/" + temps[i]));
        listTemps.push(temps[i].substring(0,temps[i].length - 4));
    }

    res.status(200).json({ data: list, list: listTemps });

}