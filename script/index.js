console.log("start...");
function Song(name, artist, path, rating){
    this.name=name;
    this.artist=artist;
    this.path=path;
    this.rating=rating;
}


var songs = [
    new Song("Love The Way You Lie","Eminum","https://www.youtube.com/watch?v=uelHwf8o7_U",5),
    new Song("Stan","Eminum","https://www.youtube.com/watch?v=gOMhN-hfMtY",5),
    new Song("Mockingbird ","Eminum","https://www.youtube.com/watch?v=S9bCLPwzSC0",5),
    new Song("Numb","Linken Park","https://www.youtube.com/watch?v=UhQyZFrYNzw",5),
]



function PlayList(songs){
    var index = 0;
    var songs = songs;
}

var playList = new PlayList(songs);

PlayList.prototype.getMySong = function (){
    console.log(this);
    console.log(this.songs);
    return this.songs[this.index];
}




function loadPlayList(playList){
    console.log("start...");
    var playingEl = document.getElementById("playing-song-num");
    playingEl.innerText=playList.getMySong().name;
    console.log(playingEl.innerText)
}

loadPlayList(playList);
