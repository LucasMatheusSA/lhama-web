module.exports = {

    // var dia     = data.getDate();           // 1-31
    // var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    // var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    // var ano2    = data.getYear();           // 2 dígitos
    // var ano4    = data.getFullYear();       // 4 dígitos
    // var hora    = data.getHours();          // 0-23
    // var min     = data.getMinutes();        // 0-59
    // var seg     = data.getSeconds();        // 0-59
    // var mseg    = data.getMilliseconds();   // 0-999
    // var tz      = data.getTimezoneOffset(); // em minutos

    date: function (){
        var data = new Date();
        
        var dia     = data.getDate();           // 1-31
        var mes     = data.getMonth();          // 0-11 (zero=janeiro)
        var ano4    = data.getFullYear();       // 4 dígitos
        var hora    = data.getHours();          // 0-23
        var min     = data.getMinutes();        // 0-59
        var seg     = data.getSeconds();        // 0-59
        
        var str_data = dia + '/' + (mes+1) + '/' + ano4;
        var str_hora = hora + ':' + min + ':' + seg;

        return "(" + str_hora + " - " + str_data + ")";
    },

    hour: function(){
        var hora    = data.getHours();          // 0-23
        var min     = data.getMinutes();        // 0-59
        var seg     = data.getSeconds();        // 0-59

        return hora + ':' + min + ':' + seg;
    },

    day: function(n){
        if(n == 0){
            var dia     = data.getDate();           // 1-31
            var mes     = data.getMonth();          // 0-11 (zero=janeiro)
            var ano     = data.getFullYear();       // 4 dígitos

            return  dia + '/' + (mes+1) + '/' + ano;
        }else if(n == 1){
            var dia     = data.getDate();           // 1-31
            var mes     = data.getMonth();          // 0-11 (zero=janeiro)
            var ano     = data.getYear();           // 2 dígitos

            return  dia + '/' + (mes+1) + '/' + ano;
        }else if(n == 2){
            var dia_sem = data.getDay();            // 0-6 (zero=domingo)

            return dia_sem;
        }
    }
}