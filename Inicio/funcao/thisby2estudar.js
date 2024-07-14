function Pessoa(){
    this.idade=0
//usando o bind para que a variavel idade seja
//a mesma de Pessoa e de setInterval
    setInterval(function(){
        this.idade++
        console.log(this.idade)

    }.bind(this),1000)
}




function Pessoa2(){
    this.idade=0
const self=this
    setInterval(function(){
        self.idade++
        console.log(self.idade)

    },1000)
}

Pessoa2()