//1º - Definir a dimensão do palco do jogo, os mosquitos serão aleatórios. Deixar o palco dinâmico.
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')//subs ? da string nível

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//9º - Adicionando o cronometro
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)//para não continuar depois da vitória
		clearInterval(criaMosquito)//para não continuar depois da vitória
		//alert('Vitoria')//teste
		//10º Vitória
		window.location.href = 'vitoria.html'
	}else {
		document.getElementById('cronometro').innerHTML = tempo
	}	
	
} , 1000)

//2º - Deixar a img mosquito de estática para dinâmico, de forma randômica
function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//após remoção, vamos selecionar os corações e substituir para o valor atribuido ao src
		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {
			//8º - Gamer Over
			window.location.href = 'fim_de_jogo.html'
			
			//alert('Interromper o jogo (game over)')//teste
		}else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}		
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//operador ternário
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html (usando o DOM)
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	//precisa de espaço entre as strings pois elas juntas não representam nenhuma classe
	//para que o interpretador compreenda que são classes diferentes
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	//7º - Controlando os pontos de vida
	mosquito.onclick = function() {
		//alert('Elemento clicado a tempo')//teste
		this.remove()//this faz referência ao próprio elemento html que executa a função
	}

	document.body.appendChild(mosquito)

	//console.log(ladoAleatorio())//teste
	
}

//3º - Criar tamanhos randômicos para o mosquito
//Math.random : produz um número que vai de 0 até muito próximo de 1
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) //de 0 a muito próximo de 3
	//console.log(classe)//teste

	//não precisa do 'break', pois o return é a última instrução da função
	//qdo o interpretador do JS identifica o comando return ele retorna o 
	//dado para quem fez a chamada da função, interrompendo o processamento da função naquele ponto
	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

//4º - Orientação da imagem (direita / esquerda)
//propriedades de estilo, criar classe para alterar a escala da imagem 
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2) //de 0 a muito próximo de 2
	
	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'		
	}		
}

