function Foo() {
    this.bar = new Bar(this);
    this.x = 10;
}

function Bar(foo) {
    this.foo = foo;
    this.y = 20;
}

var foo = new Foo();
var bar = foo.bar;

console.log(foo.x === 10);
console.log(bar.y === 20);

foo.x = 11;
bar.y = 22;

console.log( bar.foo.x === 11 );
console.log( foo.bar.y === 22 );


