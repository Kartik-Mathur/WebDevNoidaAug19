function original() {
	console.log(this)
	function notoriginal() {
		console.log(this)
	}
	notoriginal()
}

original()

let obj = {
	k: 1,
	getProp: function() {
		return this
	},
	l: "hello"
}

function f() {
	console.log(this)
	console.log(x + y)
}

// console.log(obj.getProp());
f.call(obj, 10, 20)

var s = f.bind(obj, 10, 20)

function Person(name, age) {
	this.name = name
	this.age = age
	console.log(this)
}

let p = new Person("Harry Potter", 20)
