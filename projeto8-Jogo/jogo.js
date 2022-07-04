function redimensiona(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}
function geramosquito(){
    redimensiona()
    let posicaox = Math.floor(Math.random()*largura)
    let posicaoy = Math.floor(Math.random()*altura)
    let tamanho =Math.floor(Math.random()*4)
    console.log(posicaox, posicaoy)
    console.log(tamanho)
    let mosca = document.createElement('img')
    document.body.appendChild(mosca)
    mosca.src = 'https://images.vexels.com/media/users/3/223215/isolated/preview/e14fffc1481df5ec32df45f6d1b05dd7-ilustracao-de-mosca-domestica.png'
    mosca.className = 'mosquito' + tamanho
    if(posicaox <=90 || posicaoy <=90){
        mosca.style.left = posicaox + 'px'
        mosca.style.top = posicaoy + 'px'
        mosca.style.position = 'absolute'
    }else{
        mosca.style.left = (posicaox-90) + 'px'
        mosca.style.top = (posicaoy-90) + 'px'
        mosca.style.position = 'absolute'
    }

}
    var altura, largura