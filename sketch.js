var tela = 1;
var largura = 200;
var largurax1 = 280;
var altura = 50;
var xmenu = 10;
var xmenu2 = 370;
var xmenu3 = 370;
var xmenu4 = 10
var ymenu1 = 430;
var ymenu2 = 450;
var ymenu3 = 440;
var rmenu1 = 200;
var zmenu1 = 60;
var zmenu2 = 170;
var zmenu3 = 270;
var zmenu4 = 360;
var pmenu = 10;
var pmenu2 = 400;
var kmenu = 430;
var ax1 = 40;
var ax2 = 360;
var bx1 = 400;
var bx2 = 400;
var largx = 200;
var altx = 80;
var amenu = 140;
var lmenu = 210;
var lmenu2 = 310;
var lmenu3 = 410;
var cx1 = 10;
var cx2 = 350;
var dx1 = 400; 
var dx2 = 400;
var largz = 200;
var alturak = 80;
var img1
var img2
var img3
var img4
var img5
var img6
var img7
var img8
var img9
var img10
function setup() {
  createCanvas(600, 500);
  img1 = loadImage('space.jpg');
  img2 = loadImage('astronaut1.png');
  img3 = loadImage('teste1.png');
  img4 = loadImage('duvida.png');
  img5 = loadImage('caca.png');
  img6 = loadImage('salina.png');
  img7 = loadImage('perdeu.png');
  img8 = loadImage('foguete.jpg');
  img9 = loadImage('angelica1.png');
  img10 = loadImage('ronaldo.png');
}

function draw() {
  textStyle(NORMAL);
  
  //menu//
  
  if (tela == 1){
  background(img1, 20);
  textAlign(CENTER);
  textSize(26);

  if ( mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura) {
  stroke(200);
  fill(20);
  rect(xmenu, ymenu1, largura, altura, 15);
    if (mouseIsPressed){
      tela = 3;
    }
  }
  
  fill(153, 53, 204);
  noStroke();
  text('Iniciar',50, 470);
  
  //info//
    
  if ( mouseX > xmenu2 && mouseX < xmenu2 + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura) {
  stroke(200);
  fill(20);
  rect(xmenu2, ymenu1, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 2;
    }
  }
    
  fill(153, 53, 204);
  noStroke();
  text('Informações',450, 470);
  
  }
  
  //Info//
  else if(tela ==2){
    background(240, 255, 255);
    image(img9, 20, 20);
    image(img10, 20, 180);
    textSize(28)
    text('Orientadora:', 350, 50);
    text('Desenvolvedor:', 350, 230);
    textSize(20);
    text('Maria Angelica Sarmento Silva',330, 80);
    text('Graduanda de Licenciatura em Química',370, 110);
    text('José Ronaldo do Nascimento Filho', 330, 260);
    text('Graduando em Ciências e Tecnologia', 340, 290);
    textSize(32);
    text('Voltar', 50, 480);
  
    
          if ( mouseX > xmenu4 && mouseX < xmenu4 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura) {
  stroke(200);
  fill(255, 255, 0);
  rect(xmenu4, ymenu3, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 1;
    }
  }
    
          }
  
  //conversa//
  else if(tela ==3){
    background(0, 191, 255);
    image(img2, 70, 330);
    textSize(24);
    fill(255, 255, 0);
    text('Olá seja bem vindo', 150, 40);
    text('Sou o Bob, serei seu entrevistador',230, 70);
    text('Você está aqui para se candidatar para nossa vaga de', 310, 100);
    text('cientista supremo.', 140, 130);
    text('Não fique nervoso, farei apenas algumas perguntas', 310, 160);
    text('simples.', 80, 190);
    text('Podemos começar?', 150, 220); 
    text('Continuar', 420, 470);
      if ( mouseX > xmenu2 && mouseX < xmenu2 + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura) {
  stroke(200);
  fill(255, 255, 0);
  rect(xmenu2, ymenu1, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 4;
    }
  }
  }
  
  //tela de seleção//
  else if(tela ==4){
    textSize(32);
    background(127, 255, 212);
    fill(20);
     if ( mouseX > rmenu1 && mouseX < rmenu1 + largura && mouseY > zmenu1 && mouseY < zmenu1 + altura) {
  stroke(200);
  fill(255, 255, 224);
  rect(rmenu1, zmenu1, largura, altura, 15);
       if(mouseIsPressed){
         tela = 5;
       }
  }
    text('Fase 1',280, 100);
    
    if ( mouseX > rmenu1 && mouseX < rmenu1 + largura && mouseY > zmenu2 && mouseY < zmenu2 + altura) {
  stroke(200);
  fill(255, 255, 224);
  rect(rmenu1, zmenu2, largura, altura, 15);
      if(mouseIsPressed){
        tela = 6;
      }
  }
    text('Fase 2',280, 200);
    
    if ( mouseX > rmenu1 && mouseX < rmenu1 + largura && mouseY > zmenu3 && mouseY < zmenu3 + altura) {
  stroke(200);
  fill(255, 255, 224);
  rect(rmenu1, zmenu3, largura, altura, 15);
      if(mouseIsPressed){
        tela = 7;
      }
  }
    text('Fase 3',280, 300);
    
    if ( mouseX > rmenu1 && mouseX < rmenu1 + largura && mouseY > zmenu4 && mouseY < zmenu4 + altura) {
  stroke(200);
  fill(255, 255, 224);
  rect(rmenu1, zmenu4, largura, altura, 15);
      if(mouseIsPressed){
        tela = 8;
      }
  }
    text('Fase 4',280, 400);
    
  }
  
  //pergunta 1//
  else if(tela ==5){
    background(255, 255, 255);
    image(img4, 240, 350);
    image(img3, 50, 130);
    textSize(32);
    fill(20);
    text('Avaliando a imagem a seguir', 300, 50);
    text('Qual mistura é Homogênea?',300, 100);
    textSize(26);
    fill(255, 215, 0);
    text('1 - Água + Óleo',350, 150);
    text('2 - Água + Sal',350, 200);
    textSize(36);
    fill(255, 0, 0);
    
  if ( mouseX > pmenu && mouseX < pmenu + largura && mouseY > kmenu && mouseY < kmenu + altura) {
  stroke(200);
  fill(20);
  rect(pmenu, kmenu, largura, altura, 15);
    if(mouseIsPressed){
      tela = 9;
    }
  }
    text('1', 60, 460);
    
   if ( mouseX > pmenu2 && mouseX < pmenu2 + largura && mouseY > kmenu && mouseY < kmenu + altura) {
  stroke(200);
  fill(20);
  rect(pmenu2, kmenu, largura, altura, 15);
     if(mouseIsPressed){
       tela = 4;
      
     }
  }
    text('2', 500, 460);
    
  }
  
  //pergunta2//
  else if(tela ==6){
    background(0, 255, 0);
    image(img5, 260,200);
    textSize(26);
    fill(0);
    text('Soluto: é a substância dissolvida', 200, 40);
    text('Solvente: permite que o soluto distribua-se em seu',300, 70);
    text('interior', 100, 100);
    text('Em uma mistura de água e sal', 200, 150);
    text('Qual é o Solvente?', 150, 180);
        
    if (mouseX > ax1 && mouseX < ax1+largx && mouseY > bx1 && mouseY < bx1+altx){
      fill(10);
      tela = 4;
    }
    else{
      fill(240)
    }
    rect(ax1, bx1, largx, altx);
    fill(0, 0, 255);
    text('Água', 100, 460);
    
        if (mouseX > ax2 && mouseX < ax2+largx && mouseY > bx2 && mouseY < bx2+altx){
      fill(10);
      tela = 9;
    }
    else{
      fill(240)
    }
    rect(ax2, bx2, largx, altx);
    fill(238, 221, 130);
    text('Sal', 460, 460);
  }
  
  //pergunta 3//
  else if(tela ==7){
    background(0, 250, 154);
    textSize(24);
    fill(20);
    text('Para separar o açúcar do cravo e o cascalho da areia', 300, 60);
    text('Poderiamos usar as mãos, entretanto esse processo', 300, 100);
    text('demoraria muito.', 250, 140);
    text('Qual das respostas abaixo é a melhor opção', 250, 180);
    
         if ( mouseX > amenu && mouseX < amenu + largurax1 && mouseY > lmenu && mouseY < lmenu + altura) {
  stroke(200);
  fill(255, 255, 255);
    rect(amenu, lmenu, largurax1, altura, 15);
    fill(20);
           if(mouseIsPressed){
             tela = 9;
           }
         }
    text('Separação Magnética', 280, 250)
    
     if ( mouseX > amenu && mouseX < amenu + largurax1 && mouseY > lmenu2 && mouseY < lmenu2 + altura) {
  stroke(200);
  fill(255, 255, 255);
    rect(amenu, lmenu2, largurax1, altura, 15);
    fill(20);
       if(mouseIsPressed){
         tela = 9;
       }
         }
  
    text('Catação', 250, 350);
    
     if ( mouseX > amenu && mouseX < amenu + largurax1 && mouseY > lmenu3 && mouseY < lmenu3 + altura) {
  stroke(200);
  fill(255, 255, 255);
    rect(amenu, lmenu3, largurax1, altura, 15);
    fill(20);
       if(mouseIsPressed){
         tela = 4;
       }
         }
    
    text('Peneiração', 250, 450);
    
}
  
  //pergunta 4//
  else if(tela ==8){
    background(255, 255, 255);
    image(img6, 200, 230);
    textSize(24);
    text('Evaporação', 250, 30);
    text('Consiste em evaporar o líquido que está misturado', 280, 60);
    text('com um sólido', 90, 90);
    text('Exemplo: água + sal de cozinha (cloreto de sódio).', 280, 120);
    text('Nas salinas, obtém-se o sal de cozinha por', 280, 150);
    text('este processo?', 130, 180);
    
    if (mouseX > cx1 && mouseX < cx1+largz && mouseY > dx1 && mouseY < dx1+alturak){
      fill(10);
      tela = 10;
    }
    else{
      fill(240)
    }
    rect(cx1, dx1, largz, alturak);
    fill(0, 0, 255);
    text('Verdadeiro', 100, 460);
    
      if (mouseX > cx2 && mouseX < cx2+largz && mouseY > dx1 && mouseY < dx2+alturak){
      fill(10);
        tela = 9;
    }
    else{
      fill(240)
    }
    rect(cx2, dx2, largz, alturak);
    fill(0, 0, 255);
    text('Falso', 410, 460);
  }
  
  //perdeu//
  else if(tela ==9){
    background(255, 255, 255);
    fill(20);
   image(img7, 200, 150);
    textSize(32);
    text('Você perdeu', 200, 400);
    
    if ( mouseX > xmenu3 && mouseX < xmenu3 + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura) {
  stroke(200);
  fill(255, 255, 0);
  rect(xmenu3, ymenu2, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 1;
    }
  }
    text('Menu', 400, 480);
  }
  
  //vitoria//
  else if(tela ==10){
    background(img8, 20);
    fill(255, 255, 0);
    textSize(26);
    text('Está contratado(a)!', 120, 100);
    text('Suas habilidades me surpreenderam,', 220, 140);
    text('você era quem', 100, 180);
    text('estavamos esperando', 140, 210);
    text('Aperte o cinto e vamos partir!', 180, 240);
    
    text('Fim', 400, 450);
  }
}