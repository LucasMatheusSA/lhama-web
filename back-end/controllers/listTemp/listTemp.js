const config = require('../../app-config');
const service = require('../../service/service-temp');

const directory = config.path_template;

module.exports = async (req, res) => {
    
    let temps = await service.listTemp(directory);
    let list = [];

    for(let i = 0; i < temps.length; i ++){
        list.push(await service.convert(directory + "/" + temps[i]));
    }

    res.status(200).json({ data: list, list: temps });

}