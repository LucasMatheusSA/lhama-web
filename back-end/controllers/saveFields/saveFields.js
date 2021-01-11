const fs = require("fs");
const xml2js = require('xml2js');

const config = require('../../app-config');

const directory = config.path_fields_xml;

module.exports = async (req, res) => {

    let encode = '<?xml version="1.0" encoding="utf-8"?>\n';

    const data = req.body.data;
    let file = directory + "/" + req.body.file + '.xml';

    let configs = {
        headless: true,
        allowSurrogateChars: true,
        rootName: 'form',
        cdata: true
    }
    
    const builder = new xml2js.Builder(configs);
    const xml = builder.buildObject(data);

    fs.writeFile(file, encode + xml, (err) => {
        if (err) {
            throw err;
        }

        res.status(200).json({ status: 200, message: "Update do arquivo [" + file + "] feito com sucesso." });
    });

}