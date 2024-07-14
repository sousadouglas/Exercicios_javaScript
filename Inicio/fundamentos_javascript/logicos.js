function compras(trabalho1, trabalho2){
    const comprarsorvete=trabalho1||trabalho2
    const comprartelevisao=trabalho1 && trabalho2
    const comprartelevisao32=trabalho1 != trabalho2
    return{comprarsorvete,comprartelevisao,comprartelevisao32}
}

console.log(compras(true,false))


