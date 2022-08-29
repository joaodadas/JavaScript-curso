/* Laço não encadeado
for(let x = 1; x <= 10; x++) {
    document.write('1 x ' + x + ' = ' + 1 * x + '<br/>')  
}
*/

for(y= 1; y <= 10; y++) {
    for(let x = 1; x<= 10; x++) {
        document.write( y + ' x ' + x + ' = ' + y * x + '<br/>')
    }
    document.write('<br/><hr/>')
}
