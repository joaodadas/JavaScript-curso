var nome = prompt('Digite o seu nome: ')
var peso = prompt('Informe o seu peso: ')
var altura = prompt('Informe a sua altura em centimetros: ')

 parseFloat(peso, altura)

 altura /= 100

 let clas = 0
 let m = peso / (altura**2)

if (m < 16) {
    clas = 'Baxo peso muito grave'
}else if(16 < m && m <= 16.99) {
    clas = 'Baixo pesso grave'
}else if(16 < m && m <= 18.49){
    clas = 'Baixo peso'
}else if(18.50 < m && m <= 24.99){
    clas = 'Peso normal'
}else if(25 < m && m <= 29.99){
    clas = 'Sobre peso'
}else if(30 < m && m <= 34.99){
    clas = 'Obesidade grau 1'
}else if(35 < m && m <=  39.99){
    clas = 'Obesidade garu 2'
}else if(40 < m){
    clas = 'Obesidade grau 3'
}
document.write(`${nome} possui índice de masssa corporaç igual a ${m} sendo calssificado como: ${clas}`)