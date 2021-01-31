
var Musica = new Audio();
var Mudo = false;
var volume = 1;
var Indice_Musica = 0;
var teste;
var Pasta_Musica = 'MUSICAS/';
let range = document.querySelector("#Time");
let Volume = document.querySelector("#Volume");
var ListaMusica = Musicas;
// var arquivo = 'lista2.json'
var x = ListaMusica[Indice_Musica].Arquivo;

////////////////////////////

/////////////////////
Musica.src = Pasta_Musica + ListaMusica[Indice_Musica].Arquivo;
AtualizaInfoMusica();

// console.log(ListaMusica.length-1);

function Play(){
    Musica.play();
    AtualizaInfoMusica();
}
function Pause(){
    Musica.pause();
}
function Mudar(int){
    Indice_Musica = Indice_Musica+int;
    if(0 > Indice_Musica){
        Indice_Musica = (ListaMusica.length-1);
    }else if((ListaMusica.length-1) < Indice_Musica){
        Indice_Musica = 0;
    }
    //console.log(ListaMusica[Indice_Musica].Arquivo);
    //console.log(Indice_Musica);
    Musica.src = Pasta_Musica + ListaMusica[Indice_Musica].Arquivo;
    Play();
    AtualizaInfoMusica();
    //this.Play();
}

function AtualizaInfoMusica(){
    var NomeMusica = ListaMusica[Indice_Musica].NomeMusica;
    var Album = ListaMusica[Indice_Musica].NomeAlbum;
    var Artista = ListaMusica[Indice_Musica].NomeArtista;
    
    document.querySelector("#NomeMusica").innerHTML = NomeMusica;
    document.querySelector("#NomeArtista").innerHTML = Artista;
    document.querySelector("#NomeAlbum").innerHTML = Album;
    range.value = 0;
}

Musica.addEventListener('timeupdate',function(){
    range.value = Musica.currentTime;
    range.max = Musica.duration;
    if(Musica.currentTime === Musica.duration){
        Mudar(1);
    }
    // console.log("------------------");
    // console.log(Musica.currentTime);
    // console.log(range.value);
    // console.log(Musica.duration);
    // console.log(range.max);
})
range.addEventListener('input',function(){
    Musica.currentTime = range.value;   
})
Volume.addEventListener('input',function(){
    Musica.volume = Volume.value;
})
