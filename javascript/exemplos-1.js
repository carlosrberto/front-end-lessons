var nome = 'Carlos';
var n = 10;
var arr = [10, 'casa', {}];
var obj = {};

arr[0]
arr[2]

var frutas = [ ['banana', 'laranja'], ['maça', 'pera'] ];

var fruta1 = frutas[0]
var fruta2 = frutas[1]

var obj = {
	'nome' : 'carlos',
	'idade' : 1,
	'endereco' : {
		'rua' : 'Rua 1',
		'cidade' : 'Ribeirão'
	}
}

var options = {
	x: 1,
	y: 2,
	"a-b" : 3,
	class: "MyClass"
	// for: 
	// if

}

function somar(a, b) {
	return a+b;
}

var subtrair = function(a, b) {
	return a-b;
}

var x = 1;

var password = function() {
	var  mypass = "sfdsadsa";
}

var url = "http://www.google.com";

function getProtocol(ur) {
	var url = ur.split(":")[0];
	return url;
}

getProtocol("https://www.yahoo.com");

var $ = function(id) {
	return document.getElementById(id)
}

var gerarString = function(a, b, c, d) {
	arguments
}

var listarArgumentos = function() {
	var str = "";
	for(var i=0; i < arguments.length; i++) {
		str = str + arguments[i];
	}
	return str;
}

var listarArgumentos2 = function() {
	return Array.prototype.join.call(arguments, "");
}

listarArgumentos2.call(null, "a") // outra maneira de chamar a função

listarArgumentos2.apply(null, ["a", "b", "c"])
listarArgumentos2("a", "b", "c");

var dividir = function(a, b) {
	if ( typeof a === "number" &&  typeof b === "number" ) {
		return a/b;
	} else {
		console.log("os valores devem ser números!");
	}
}
