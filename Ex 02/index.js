/* Ex - 1
let frutas = ['Pera', 'laranja', 'goiaba', 'abacaxi']

for(let y = 0; y < frutas.length; y ++) {
    document.write(frutas[y] + '<br/>')
}*/

//Ex - 2
let y = 1
let x = 1

while(y <= 10) {
    x = 1;
    while(x <= 10) {
        document.write(y + ' X ' + x + ' = '+  x * y + '<br/>')
        x++
    }
    document.write('<br/>', '<hr/>')
    y++
}

