function Person(name,age){
    this.name = name;
    // this.age = age;
    this.getFirstName = function(){
        return this.name.split(' ')[0];
    }
    this.isAdult = function(){
        return age>=18;
    }
}

Person.staticFun = Person.prototype.staticFun = function(){
    console.log('This is static');
}

let p = new Person('Harry Potter',18);
let p1 = new Person('Ron Weasley',17);

// function f(){
//     console.log(this);
// }

// let a = new f();
// console.log(a);
