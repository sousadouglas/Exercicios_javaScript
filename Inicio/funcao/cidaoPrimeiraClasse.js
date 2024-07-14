//tipos de funcao

//forma literal

function fun1(){}

//armazenar em uma variavel

let valor=(num)=>{}
let valor2=function(num){}

//armazenar em um array

const array=[function(a,b){return a+b}]
const array2=[function(a,b){return a+b},fun1]

console.log(array[0](2,2)) 

//armazenar em um obj
let obj={}
obj.falar=function(){return 'opa'}
console.log(obj.falar())

//Passar funcao como parametro
function rum(fun){
    fun()
}

rum(function(){console.log('Executando')})


//funcao dentro de outra funcao

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,2)(4)