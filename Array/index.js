let objeto = ['Cadeira', 'Impressora', 'Garfo']

function adicionar() {
    let saida = document.getElementById('input').value
    if(saida != '') {
        if(objeto.indexOf(saida) !== -1) {
            alert('O elemento ja foi adicionado')
        }else {
            objeto.push(saida)
            console.log(objeto)
            document.getElementById('input').value = ''
        }
    }else {
        console.log(objeto)
        alert('Adicione um valor válido')
    }
   
}

function ordenar() {
    console.log(objeto.sort())
}