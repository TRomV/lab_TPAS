var video
var duration;
var startDur
var volume;

function changevid(){
    var name = document.getElementById('file').files[0].name;
    video = document.getElementById('video');
    video.src = name;
    initplayer();
}

window.onresize = function() {
    client_w=document.body.clientWidth;
    client_h=document.body.clientHeight;
    duration.style="width:" + (client_w-500) + "px";
    video.width=client_w-100;
    video.height=client_h-100;
}


function initplayer(){
    var durtime = document.getElementById('durtime');
    var curtime = document.getElementById('сurtime');
    duration = document.getElementById('ratio');
    volume = document.getElementById('volume');

    client_w=document.body.clientWidth;
    client_h=document.body.clientHeight;
    duration.style="width:" + (client_w-500) + "px";
    video.width=client_w-100;
    video.height=client_h-100;

    duration.value = 0;
    duration.min = 0;
    
    video.addEventListener('timeupdate', timervideo, false);
}

function timervideo(){
    duration.max = video.duration;

    var curmins = Math.floor(video.currentTime/60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration/60);
    var dursecs = Math.round(video.duration - durmins * 60);

    if (cursecs<10){ cursecs = "0" + cursecs; }
    if (dursecs<10){ dursecs="0" + dursecs; }
    if (curmins<10){ curmins = "0" + curmins; }
    if (durmins<10){ durmins="0" + durmins; }

    curtime.innerHTML = curmins+":"+cursecs;
    durtime.innerHTML = durmins+":"+dursecs;

    if (video.currentTime == video.duration){
        window.location.reload();
    }
}

function PlayPause(){
    if (video.paused){
        video.play();
        document.getElementById('PlayPause').innerHTML = 'Pause'; 
        startDur = setInterval(initDur, 1000/66);
    }
    else{
        video.pause();
        document.getElementById('PlayPause').innerHTML = 'Play'; 
        clearInterval(startDur);
    }
}

function fullScreen(){
    video.webkitEnterFullscreen();
}

function initDur(){
    duration.value = video.currentTime;
}

function movedrange(){
    video.currentTime = duration.value;
    PlayPause();
}

function clrrange(){
    clearInterval(startDur);
    if(video.paused == false){
        PlayPause();
    } 
}

function chvolume(){
    video.volume = volume.value/100;
}