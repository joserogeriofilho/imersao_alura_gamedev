function setup() {
  createCanvas(windowWidth, windowHeight);
  somDoJogo.loop();
  
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}