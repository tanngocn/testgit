var chalk=require('chalk');

function Dog(name){
	this.name=name;
}
Dog.prototype.sayHi=function(){
	console.log('Hello, My name is',chalk.blue(this.name))
}
module.export =Dog