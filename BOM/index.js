let janela

function abrirPopUp() {
    janela = window.open('', 'nove-janela', 'width=200, height=100')
}

function fecharPopUp() {
    janela.close()
}