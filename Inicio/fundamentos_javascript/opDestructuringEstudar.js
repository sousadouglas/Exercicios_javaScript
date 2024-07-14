let pessoa={
    nome:'ana',
    idade : 5,
    endereco:{
        logradouro:'tasso',
        numero:1000
    }
}

const {nome,idade}=pessoa
console.log(nome,idade)

const{nome:n, idade:i}=pessoa
console.log(n,i)

const{sobrenome,bemHumorado=true}=pessoa
console.log(sobrenome,bemHumorado)
