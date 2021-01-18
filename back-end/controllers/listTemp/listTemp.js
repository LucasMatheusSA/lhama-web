const config = require('../../app-config');
const service = require('../../service/service-temp');

const directory = config.path_template;

module.exports = async (req, res) => {
    
    let temps = await service.listTemp(directory);
    let list = {};
    let listFields = [];
    let listTemps = [];

    function convertType (type){
        switch (type) {
            case 'TEXT':
                return  'text';
            case 'DATE':
                return  'date';
            case 'DOCNUMBER':
                return  'number';
            default:
                return  'text';

        }
    }

    for(let i = 0; i < temps.length; i ++){
        let template = await service.convert(directory + "/" + temps[i]);

        let templateFields = template.template.fields[0].field;
        console.log(template.template.fields[0]);
        let docType = template.template.docType[0];

        for(let i = 0; i < templateFields.length; i++){

            let name = templateFields[i].name[0];
            let description = templateFields[i].description[0];
            let type = templateFields[i].type[0];

            listFields.push({ label: name, desc: description, type: convertType( type )})
        }
        
        list[docType] = listFields;
        listTemps.push(temps[i].substring(0,temps[i].length - 4));

        listFields = [];
    }

    res.status(200).json({ templateFields: list , list: listTemps });

}