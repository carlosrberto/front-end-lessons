var circle = {
	w: 100,
	r: 50,
	getArea: function() {
		return 2 * Math.PI * this.r;
	}
}

var Circle = function(name, r) {
	this.name = name;
	this.r = r;
}

Circle.prototype = {
	getArea: function() {
		return Math.pow(2 * Math.PI * this.r, 2);
	},

	getSize: function() {
		return 2 * Math.PI * this.r;	
	}
};

var circle1 = new Circle("circulo 1", 10);

var Person = function(nome) {
	this.name = nome;
	this.life = 100;

	this.sayHello = function() {
		return "Hello World";
	}
}

Person.prototype.walk = function() {
	this.life = this.life + 1;
}

Person.prototype.smoke = function() {
	this.life = this.life - 20;	
}

Person.prototype.kill = function() {
	this.life = 0;
}

var carlos = new Person("Carlos");
var hebert = new Person("Hebert");

var TodoItem = function(text) {
	this.text = text;
	this.isDone = false;
}

TodoItem.prototype.done = function() {
	this.isDone = true;
}

var Todo = function(name) {
	this.name = name;
	this.todoList = [];
}

Todo.prototype.createTodo = function(text) {
	var todoItem = new TodoItem(text);
	this.todoList.push(todoItem);
}

Todo.prototype.listTodo = function() {
	var tasks = [];
	for(var i=0; i<this.todoList.length; i++) {
		tasks.push(this.todoList[i].text);
	}

	return tasks;
}

var todo = new Todo("Lista do Supermercado");