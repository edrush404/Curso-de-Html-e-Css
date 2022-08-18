/* let atribuicao = "atribuição"
console.log(atribuicao)

let x = 30;
let y = 2;

console.log("O operador de adição retorna", x+y);
console.log("o operador de adição retorna", x-y);
console.log("o operador de adição retorna", x*y);
console.log("o operador de adição retorna", x/y);

let n1 = 10;
let n2 = 3;
console.log("O operador de exponenciação retorna", n1**n2);
console.log("O operador de modulo(resto de divisão) retorna", n1%n2);
console.log("n1 valia", n1 );
n1++;
console.log("Agora vale", n1);
console.log("n2 valia", n2);
n2--;
console.log("Agora vale", n2); */
//========================================

/* console.log ("--- Operadores de comparação ---");

let valor1 = 100;
let valor2 = "100";

if(valor1 == valor2){
	console.log("Os valores são iguais", valor1, valor2);
}
if(valor1 === valor2){
	console.log("Os valores são iguais", valor1, valor2);
}else{
	console.log("Os valors são iguais mais os tipos são diferentes")
}
 
 
let valor3 = 200;
let valor4 = "200";

if(valor3 != valor4){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais");
}

if(valor 3 !== valor4){
	console.log("Os valores são de tipos diferentes");
}else{
	console.log("Os valores são iguais");
} */
//=========================================

/* let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

// (&& operador logico e
// (|| operador logico ou
// (! operador de negação

if(v4 > v3 || v1 > v2){
	console.log(v4, "é maior que", v3,"ou", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

if(!(v3 > v4)){
	console.log(v3, "não é maior que", v4);
} */
//=========================================
 
/* if(v1 > v2){
	console.log(v1, "é maior que", v2);
}else if(v1 < v2){
	console.log(v1, "é menor que", v2);
}else{
	console.log(v2, "é maior que", v1);
}

if(v1 > v2){
	console.log(v1, "é maior que ou igual a", v2);
}else if(v1 <= v2){
	console.log(v1, "é menor que ou igual a", v2);
} */

// ==================================================================//


function modoNoturno(){
	let title = document.getElementById("titulo");
	let botom = document.getElementById("botao");
	
	if (title.innerText == "Modo Noturno"){
		document.body.style.backgroundColor = "white";
		
		title.innerHTML = "Modo Diurno";
		title.style.color = "black";
		botom.style.color = "white";
		botom.style.backgroundColor = "black";
		
	}else{ 
		document.body.style.backgroundColor = "black";

		title.innerHTML = "Modo Noturno";
		title.style.color = "white";
		botom.style.color = "black";
		botom.style.backgroundColor = "white";
	}
}



















