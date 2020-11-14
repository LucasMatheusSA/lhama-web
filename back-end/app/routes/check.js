const Log = require('./log');

module.exports = function(app,db){
    app.post('/check',(req,res)=>{

        res.send('Ativo');

        Log.msg('Back ativo');
        
    })

}