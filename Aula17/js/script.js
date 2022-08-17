/* let marcal = "vw"
let marca2 = "GM"
let marca3 = "fiat"

console.log(marcal, marca2, marca3);

let marcas = ["VW", "GM", "FIAT"];

let vw = ["polo","jetta","gol","taos","voyage"]

	if (vw[1] == "polo"){
		console.log("Meu carro é um Polo :)" + vw[1])
	}else{
		console.log("Estou liso, não tenho carro :( ")
}
	
let gm = ["camaro","cruze","onix","spin","tracker"]

	if (gm[2] == "ferrari"){
		console.log("meu carro é uma ferrari" + gm[2])
	}else{
		console.log("Estou liso, não tenho carro :( ")
}

let fiat = ["mobi","argo","ferrari","dodge","jeep"]
	if (fiat[2] == "ferrari"){
		console.log("Meu carro é uma " + fiat[2])
	}else{
		console.log("estou liso carai")
}
for (i = 0; i <vw.length; i++){
	if(vw[i] == "voyage"){
		console.log("achei meu carro " + i, vw[i]);
	}else{
		console.log("Esse não é meu carro " + vw[i])
	}	
} 
console.log(vw.length)*/ //verifica o tamanho

/* let frutas = ["manga", "uva", "melância", "banana", "morango", "caju", "maçã", "melão", "tomate", "limão"]
for (i = 0; i <frutas.length; i++){
	if(frutas[i] == "manga"){
		console.log(frutas[i], i);
	}else{
		console.log("Essa não é a fruta " + frutas[0] + " é " + frutas[i])
	}	
} */

let animais = ["leão", "tigre", "leopardo", "cavalo", "vaca", "boi", "touro", "leão", "girafa", "panda"]
let lista = document.getElementById("lista");

console.log(lista)

for (i = 0; i < animais.length; i++){
	if(i % 2 == 0){
		lista.innerHTML += "<li><p>par</p>" + animais[i] + "</li>";
	}else{
		lista.innerHTML += "<li><p>impar</p>" + animais[i] + "</li>";
	}
}






