const nota=[7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasBaixas=[]







notasBaixas = nota.filter(function(nota){
    return nota<7
})

console.log(notasBaixas)

notasBaixas2=nota.filter(nota=>nota>6)

console.log(notasBaixas2)