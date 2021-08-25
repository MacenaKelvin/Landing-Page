// Case Sensitive => reconhece letras MAIUSCULAS e minusculas (e diferencia elas)
// kelvin / Kelvin 

// document selector
// por tag: document.getElementsByTagName('h3')
// por classe: document.getElementsByClassName('.nomedaclasse')
// por nome: document.getElementsByName('email')
// por ID: document.getElementById('#idDoelemento')
// por seletor: document.querySelector('id/classe/nome')

// variaveis :
// var nome = 'kelvin' //jeito mais antigo
// let nome = 'kelvin' //jeito mais atual - variavel que vai sofrer mudanças
// const nome = 'kelvin' //jeito mais atual - variavel que não vai sofrer mudanças

let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function(){
    modal.style.display = 'block'
}

span.onclick = function(){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}