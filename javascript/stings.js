var nome = 'carlos roberto';

// nome.trim() // remove espaços

// nome.charAt(0); // retorna o caracter na posição passada

// nome.indexOf('o');

// nome.length

// nome.split("o");

// var url = location.href;

// var server = url.split("/");
 
// server = server[2]

var nome = "carlos"
var isNomeEmpty;

if ( nome == "" ) {
	isNomeEmpty = true;
}

isNomeEmpty = ! !!nome;

var carro = {
	ano: 2012,
	marca: "volks"
}

for( p in carro ) {
	console.log(p)
}



var valor = 0;
var incremento = 0.5;
var maximo = 100;

while ( valor <  maximo ) {
    valor = valor + incremento;
}

console.log( valor );

// 100
