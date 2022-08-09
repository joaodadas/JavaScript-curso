function exebirartigo(id, callbackSucesso, callbackErro)  {
     if ( false )  {
        callbackSucesso('Funçoes de callback em JS', 'Funçoes de call back são muito utilizadas ')
    } else  {
        callbackErro('Erro ao recuperar os dados  ')
    }

}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro) {
    document.write('<p><b>Erro:</b>' + erro + '</p>')
}
exebirartigo(1, callbackSucesso, callbackErro)
