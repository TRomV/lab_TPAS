var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var imgHero = document.getElementById("hero");
var imgGnd1 = document.getElementById("gnd1");
var imgGnd2 = document.getElementById("gnd2");
var NSV = document.getElementById("nameSave");
var NLD = document.getElementById("nameLoad");
var music = document.getElementById("music");
var mas=[];
var flagHero=0;
var flagDey=0;
var hod='';

function playandpausemusic(event){
    console.log(music.paused);
    if (music.paused){
        music.play();
    }
    else{
        music.pause();
    }
}

function savemaps(){
    if (NSV.value != ''){
        localStorage.setItem(NSV.value, JSON.stringify(mas));
        alert('Карта сохранена под названием: ' + NSV.value);
    }
    else{
        alert("Введите название в поле ввода!");
    }
}

function loadmaps(){
    if ( localStorage.getItem(NLD.value) != null){
        mas = JSON.parse(localStorage.getItem(NLD.value));
        alert('Карта под названием ' + NLD.value + ' загружена!');
        flagHero=1;
        drawHero();
    }
    else{
        alert("Карты с таким названием не существует!")
    }
}

function nameGame(){
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";
    ctx.fillText("КРОТ", 420, 280);
}

document.onkeydown = function checkKeycode(event){
var keycode;
keycode = event.which;
	switch(keycode){
		case 37: dvig('left'); break;
        case 38: dvig('up'); break;
        case 39: dvig('right'); break;
        case 40: dvig('down'); break;
        case 32: deystv(); drawHero(); break;
	}
}

function deystv(){
    if (flagDey < 2){ 
        flagDey += 1;
    }
    else{
        flagDey = 0;
    }
}

function map(){
    var n=20, m=12;
    for (var i=0; i<n; i++){
        mas[i]=[];
        for (var j=0; j<m; j++){
            ctx.drawImage(imgGnd1,i*50,j*50);
            mas[i][j]=0;
        }
    }
}

function zacr(){
    for (var i=0; i<20; i++){
        for (var j=0; j<12; j++){
            if (mas[i][j] == 0){
                ctx.drawImage(imgGnd1,i*50,j*50);
            }
        }
    }
    if (flagHero == 0){
        nameGame();
    }
}

canvas.onclick = function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    x = Math.floor(x/50);
    y = Math.floor(y/50);

    if (flagHero == 0){
        mas[x][y]=1;
        flagHero=1;
        drawHero();
    }
}

function drawHero(){
    ctx.clearRect(0,0,1000,600)
    for (var i=0; i<20; i++){
        for (var j=0; j<12; j++){
            if (mas[i][j]==1){
                ctx.drawImage(imgHero,i*50,j*50);
            }
            else if (mas[i][j]==2){
                ctx.drawImage(imgGnd2,i*50,j*50);
            }
        }
    }
    zacr();
    switch(flagDey){
        case 0: ctx.fillStyle = "white";
                ctx.font = "24px Verdana"
                ctx.fillText("Просто иду", 10, 580);
            break;

        case 1: ctx.fillStyle = "white";
                ctx.font = "24px Verdana"
                ctx.fillText("Копаю", 10, 580);
            break;

        case 2: ctx.fillStyle = "white";
                ctx.font = "24px Verdana"
                ctx.fillText("Закапываю", 10, 580);
            break;
    }
}

function fullLeft(i){
    if (i==0) return 1;
    else return i;
}
function fullRight(i){
    if (i==19) return 18;
    else return i;
}
function fullUp(j){
    if (j==0) return 1;
    else return j;
}
function fullDown(j){
    if (j==11) return 10;
    else return j;
}

function dvig(arr){
    if (flagHero == 1){
        switch(arr){
            case 'left':
                for (var i=0; i<20; i++){
                    for (var j=0; j<12; j++){
                        if (mas[i][j]==1){

                            if (flagDey == 0){ 
                                if (mas[fullLeft(i)-1][j]==2){
                                    mas[i][j]=2;
                                    mas[fullLeft(i)-1][j]=1;
                                    drawHero();
                                }
                            }

                            else if (flagDey == 1){
                                if (mas[fullLeft(i)-1][j]==2){ 
                                    mas[i][j]=2;
                                    mas[fullLeft(i)-1][j]=1;
                                    drawHero();
                                }

                                else{
                                    mas[i][j]=2;
                                    mas[fullLeft(i)-1][j]=1;
                                    drawHero();
                                } 
                            }

                            else{
                                if (mas[fullLeft(i)-1][j]==2){ 
                                    mas[i][j]=0;
                                    mas[fullLeft(i)-1][j]=1;
                                    drawHero();
                                }
                            }                            
                            i=20;
                            j=12;
                        }
                    }
                }
            break;

            case 'right':
                for (var i=0; i<20; i++){
                    for (var j=0; j<12; j++){
                        if (mas[i][j]==1){

                            if (flagDey == 0){ 
                                if (mas[fullRight(i)+1][j]==2){
                                    mas[i][j]=2;
                                    mas[fullRight(i)+1][j]=1;
                                    drawHero();
                                }
                            }

                            else if (flagDey == 1){
                                if (mas[fullRight(i)+1][j]==2){ 
                                    mas[i][j]=2;
                                    mas[fullRight(i)+1][j]=1;
                                    drawHero();
                                }
                                else{
                                    mas[i][j]=2;
                                    mas[fullRight(i)+1][j]=1;
                                    drawHero();
                                } 
                            }

                            else{
                                if (mas[fullRight(i)+1][j]==2){
                                    mas[i][j]=0;
                                    mas[fullRight(i)+1][j]=1;
                                    drawHero();
                                }
                            } 
                            i=20;
                            j=12;
                        }
                    }
                }
            break;

            case 'up':
                for (var i=0; i<20; i++){
                    for (var j=0; j<12; j++){
                        if (mas[i][j]==1){

                            if (flagDey == 0){ 
                                if (mas[i][fullUp(j)-1]==2){
                                    mas[i][j]=2;
                                    mas[i][fullUp(j)-1]=1;
                                    drawHero();
                                }
                            }
                            
                            else if (flagDey == 1){
                                if (mas[i][fullUp(j)-1]==2){ 
                                    mas[i][j]=2;
                                    mas[i][fullUp(j)-1]=1;
                                    drawHero();
                                }
                                else{
                                    mas[i][j]=2;
                                    mas[i][fullUp(j)-1]=1;
                                    drawHero();
                                } 
                            }

                            else{
                                if (mas[i][fullUp(j)-1]==2){
                                    mas[i][j]=0;
                                    mas[i][fullUp(j)-1]=1;
                                    drawHero();
                                }
                            } 
                            i=20;
                            j=12;
                        }
                    }
                }
            break;

            case 'down':
                for (var i=0; i<20; i++){
                    for (var j=0; j<12; j++){
                        if (mas[i][j]==1){

                            if (flagDey == 0){ 
                                if (mas[i][fullDown(j)+1]==2){
                                    mas[i][j]=2;
                                    mas[i][fullDown(j)+1]=1;
                                    drawHero();
                                }
                            }
                            
                            
                            else if (flagDey == 1){
                                if (mas[i][fullDown(j)+1]==2){ 
                                    mas[i][j]=2;
                                    mas[i][fullDown(j)+1]=1;
                                    drawHero();
                                }
                                else{
                                    mas[i][j]=2;
                                    mas[i][fullDown(j)+1]=1;
                                    drawHero();
                                } 
                            }

                            else{
                                if (mas[i][fullDown(j)+1]==2){
                                    mas[i][j]=0;
                                    mas[i][fullDown(j)+1]=1;
                                    drawHero();
                                }
                            } 
                            i=20;
                            j=12;
                        }
                    }
                }
            break;
        }
    }
}
map()
imgGnd2.onload = zacr;

if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", Aclr, false);
  }else{
    console.log("DeviceMotionEvent is not supported");
}
  
function Aclr(event){
    if (Math.round(event.gamma) > 15){
        hod = 'up';
    }
    if (Math.round(event.gamma) < -15){
        hod = 'down';
    }
    if (Math.round(event.beta) > 15){
        hod = 'right';
    }
    if (Math.round(event.beta) < -15){
        hod = 'left';
    }
}


startAccel = setInterval(function(){
    switch(hod){
		case 'left': dvig('left'); hod = ''; break;
        case 'up': dvig('up'); hod = ''; break;
        case 'right': dvig('right'); hod = ''; break;
        case 'down': dvig('down'); hod = ''; break;
	}
}, 500)

