function Human(name, age) {
    this.name = name;
    this.age = age;

    this.showMe = function() {
        console.log(`My name is ${this.name}, age is ${this.age}.`);
    }
}

var h1 = new Human('홍길동', 20);
var h2 = new Human('둘리', 120);

h1.showMe();
Human.prototype.hello = function() {
    console.log(`Hello ${this.name}`);
}
h1.height = 180;
h2.showMe();

h1.hello();

console.log("h2.height : " + h2.height);
console.log("h1.height : " + h1.height);
console.log(h2);
