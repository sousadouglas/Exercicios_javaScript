const pessoa={
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)

    }
}

pessoa.falar()

const farlarbind= pessoa.falar.bind(pessoa)

farlarbind()