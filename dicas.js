//var nome = window.prompt("Olá, qual o seu nome?")
//document.write(`Bem-vindo(a) ${nome}!`) // template string

var html = window.document.getElementById('html')
html.addEventListener('click', clicar)
html.addEventListener('mouseenter', entrar)
html.addEventListener('mouseout', sair)

function clicar() {

}

function entrar() {
    html.style.color = 'black'
}

function sair() {
    html.style.color = 'white'
}

var css = window.document.getElementById('css')
css.addEventListener('click', clicar0)
css.addEventListener('mouseenter', entrar0)
css.addEventListener('mouseout', sair0)

function clicar0() {

}

function entrar0() {
    css.style.color = 'black'
}

function sair0() {
    css.style.color = 'white'
}

var javascript = window.document.getElementById('javascript')
javascript.addEventListener('click', clicar1)
javascript.addEventListener('mouseenter', entrar1)
javascript.addEventListener('mouseout', sair1)

function clicar1() {

}

function entrar1() {
    javascript.style.color = 'black'
}

function sair1() {
    javascript.style.color = 'white'
}