var segundo = 0;
var max = false;

function incrementar() {
    segundo = segundo + 1;
    if ( segundo == 10 ) {
        max = true;
    }
    console.log(segundo);
}

function decrementar() {
    segundo = segundo - 1;
    console.log( segundo );
}

var contador = setInterval(function(){
    if ( max == true ) {
        decrementar();
        if( segundo <= 0 ) {
            max = false;
        }        
    } else if ( segundo <= 10 ) {
        incrementar();
    }
}, 300);