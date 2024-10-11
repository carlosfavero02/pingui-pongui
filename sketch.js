//variáveis da bolinha
let xBolinha = 100;//largura da bola
let yBolinha = 200;//altura da bola
let diametro = 20;//diametro
let raio = diametro / 2;//raio

//variáveis do oponente
let xRaqueteOponente = 585;//lardura da raquete
let yRaqueteOponente = 150;//altura 

//velocidade da bolinha
let velocidadeXBolinha = 6;//velocidade
let velocidadeYBolinha = 6;//velocidede

//variáveis da raquete
let xRaquete = 5;//largura
let yRaquete = 150;//altura
let raqueteComprimento = 10;//comprimento
let raqueteAltura = 90;//altura

//placar do jogo
let meusPontos = 0;//placar meu ponto
let pontosDoOponente = 0;//ponto do oponente


//sons do jogo
let raquetada;//sons
let ponto;//sons
let trilha;//sons

let colidiu = false;//colidiu falso

function setup() {
  createCanvas(600, 400);//tamanho da tela
    trilha.loop();
}

function draw() {//função 
    background(0);//
    mostraBolinha();//
    movimentaBolinha();//comndos dos bagulho
    verificaColisaoBorda();//
    mostraRaquete(xRaquete, yRaquete);//
    movimentaMinhaRaquete();//
    verificaColisaoRaquete(xRaquete, yRaquete);//
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);//
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);//
    movimentaRaqueteOponente();//
    incluiPlacar() //
    marcaPonto();//
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);//conficuracao da bolinha
}

function movimentaBolinha() {draw
  xBolinha += velocidadeXBolinha;//velocidade
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {//movimentos
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);//posisoes
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {//movimentos da raquete
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {//movimento
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;//colisao das raquete com a bola
     raquetada.play();//rraquete play
  }
}

function verificaColisaoRaquete(x, y) {//função
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);//os bagulho da raquete e bolinha
    if (colidiu){//colidiu
        velocidadeXBolinha *= -1;//colisao das raquete com a bola
        raquetada.play();//play
  }
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;//movimentos da raquete
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;//movimentos da raquete
    }
}


function incluiPlacar(){//negocios do placar
  stroke(255)//avc
    textAlign(CENTER);//pra fiacar no centro
    textSize(16);//tamanho 
    fill(color(255,140, 0));//cor 
    rect(150, 10, 40, 20);//cor
    fill(255);//posição
    text(meusPontos, 170, 26);//posição 
    fill(color(255,140, 0));//cor
    rect(450, 10, 40, 20);//cor
    fill(255);//preencher
    text(pontosDoOponente, 470, 26);//posição do placar



}


function marcaPonto() {//marca pontos 
    if (xBolinha > 590) {//bolinha
        meusPontos += 1;//placar
        ponto.play();//bolinha
    }
    if (xBolinha < 10) {//bolinhas
        pontosDoOponente += 1;//placar
        ponto.play();//play
    }
}


function preload(){//função pre caregamento
  trilha = loadSound("trilha.mp3");//trilha mp3
  ponto = loadSound("ponto.mp3");//sons
  raquetada = loadSound("raquetada.mp3");//sons mp3
}

