function mouse(name){
	this.name=name;
}
mouse.prototype.run =function(){
	console.log("Run....");
}

module.export=mouse;