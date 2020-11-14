const Log = require('./log');

var img = 'back-./img/img_3.jpg';

module.exports = function(app,db){
    app.post('/getImage',(req,res)=>{

        res.sendFile(img);

        Log.msg('Envio de imagem (' + img + ')');
        
    })

}