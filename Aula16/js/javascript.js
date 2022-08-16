let nota = {
	"rafael": ["Rafael", 10, 6],
	"joao": ["Joao", 5, 6],
	"pedro": ["Pedro", 5, 7]
}

media(nota["rafael"][0],nota["rafael"][1],nota["rafael"][2])
media(nota["joao"][0],nota["joao"][1],nota["joao"][2])
media(nota["pedro"][0],nota["pedro"][1],nota["pedro"][2])



function media(nome, nota1, nota2){
	let media = (nota1 + nota) / 2

	if (media < 6){
		console.log("Reprovado")
	}else if(media == 6){
		console.log("Passou no sufoco")
	}else{
		console.log("Aprovado com sucesso")
	}	

  } 





/* let rafaelnota1, pedronota1, joaonota1;
let rafaelnota2, pedronota2, joaonota2;
let media;
let nome = "rafael"

	rafaelnota1 = 10;
	rafaelnota2 = 7;

	media = (rafaelnota1 + rafaelnota2) / 2;
	
if (media < 6){
	console.log(nome+" Reprovado")
}else if(media == 6){
	console.log(nome+" Passou no sufoco")
}else if (media > 6){
	console.log(nome+" Aprovado com sucesso")
}	
	nome = "pedro"
	pedronota1 = 5
	pedronota2 = 6
	
	media = (pedronota1 + pedronota2) / 2;
	
if (media < 6){
	console.log(nome+" Reprovado")
}else if(media == 6){
	console.log(nome+" Passou no sufoco")
}else if (media > 6){
	console.log(nome+"Aprovado com sucesso")
}	
	nome = "joao"
	joaonota1 = 5
	joaonota2 = 7
	
	media = (joaonota1 + joaonota2) / 2;
	
if (media < 6){
	console.log(nome+" Reprovado")
}else if(media == 6){
	console.log(nome+" Passou no sufoco")
}else if (media > 6){
	console.log(nome+" Aprovado com sucesso")
} */

 
 
 

/* let x = 1;
let y = 9;

if(x > y){
	alert("X é maior que Y");
}else if(y > x){
	alert("Y é maior que X");
}else{
	alert("X é igual a Y");
} */





/* let texto = "Esse é o meu primeiro texto"; //variável de contexto 
var texto2 = " Esse é o meu segundo texto"; // super global
const texto3 = " Esse é o meu terceiro texto"; // variável que nunca muda

let nome = "Julio";
let idade = 28;

let indicador = 1;

console.log(texto + texto2 + texto3);
console.log(indicador)
console.log("A idade de " + nome + " é : " + idade); */





/* var primeiroNumero;
var segundoNumero;
var media;


	primeiroNumero = 10;
	segundoNumero = 7;

	media = (primeiroNumero + SegundoNumero) / 2;

	console.log(primeiroNumero);
	console.log(segundoNumero);
	console.log(media);
	console.log(primeiroNumero * segundoNumero); */