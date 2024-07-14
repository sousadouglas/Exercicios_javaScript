//armazena uma funcao em um variavel
const imprimirSoma =function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//funcao em uma variavek de outro modo
const imprimirSoma2=(a,b)=>{
    return a+b
}

console.log(imprimirSoma2(8,9))

//retorno inplicito
const subtracao=(a,b) => a-b

console.log(subtracao(2,3))