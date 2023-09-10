// function --> dahij ashiglah bolomjtoi codnii tsugluulga
function restart(){
	console.log("game restarted");
	console.log("hello");
}
restart();
function hello(name){
	console.log("snu minii neriig tergel " + name);
}

hello("tergel",23);
hello("Bat",15);
hello("Suvd",45);
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);
function too(i,d){
		if(i>d){
			console.log(i)
		}else{
			console.log(d)
		}
}
too(32<14);
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['black', 'blue', 'purple', 'red', 'green'];
random = Math.floor(Math.random()*5);
var btn = document.getElementsByTagName('button')[0];
console.log(btn);
var i=-1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random];
	btn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1;
	}
}