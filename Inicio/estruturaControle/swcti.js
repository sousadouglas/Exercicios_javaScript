const imprimir=(nota)=>{
switch (Math.floor(nota)){
    case 10:
        console.log('Quadro de honra')
        break


        case 9:
        console.log('Aprovado')
        break

        case 5:
        console.log('Recuperacao')
        break

        case 2:
        console.log('Reprovado')
        break
        default:

        console.log('valor invalido')
        break


}
}

imprimir(8)