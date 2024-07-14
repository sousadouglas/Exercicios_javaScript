const pessoa={
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)

    }
}

pessoa.falar()
//ele define que falar esta associado com pessoa tirando a necessodade
//de colocar pessoa.falarbind
const farlarbind= pessoa.falar.bind(pessoa)

farlarbind()