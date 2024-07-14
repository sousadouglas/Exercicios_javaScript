function imprimirGrito(obj){
    try{
    console.log(obj.name.toUpperCase()+'!!!')
}catch (e){
    tratarErroLancar(e)
}

}

const obj={nome:'Roberto'}
imprimirGrito(obj)