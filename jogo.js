var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var nivel = window.location.search
nivel = nivel.replace('?','')


var createdMosquitoTime = 1500

if(nivel === 'normal'){
    //1500

    createdMosquitoTime = 1500
} else if (nivel === 'dificil'){
    //1000

    createdMosquitoTime = 1000
} else if(nivel === 'Sharigan'){
    //750

    createdMosquitoTime = 850
}

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    
}


ajustaTamanhoPalco()





var cronometro = setInterval(function(){
    
    if (tempo < 0){
        clearInterval(cronometro)
        window.location.href = 'Win.html'
    } else{
    document.getElementById('cronometro').innerHTML = `Tempo restante: ${tempo}`
    tempo --}
    
},1000)


function posicaoRandom(){
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'GameOver.html'
        }

        document.getElementById('v' + vidas).src='imgs/coracao_vazio.png'

        vidas ++

    }  

  



    //rmover o mosquito anteriro caso exista
    


var posicaox = Math.floor((Math.random() * largura)) - 200  
var posicaoy = Math.floor((Math.random() * altura)) - 200






posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy


//Mosquito

var mosquito = document.createElement('img')

mosquito.src = 'imgs/mosquito.png'
mosquito.className = `${tamanhoMosquito()} ${ladoAleatorio()}`
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.style.userSelect = 'none'

mosquito.addEventListener('click', function(){
    this.remove()

})



document.body.appendChild(mosquito)
tamanhoMosquito()

}

setInterval(function(){
    posicaoRandom()
}, createdMosquitoTime)


function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
    }       return 'mosquito3'
}


function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return('ladoA')
        case 1:
            return('ladoB')
    }
}

