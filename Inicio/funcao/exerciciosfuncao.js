/*0.1 Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores*/

valores=(vl1=0,vl2=0)=>{
    
    
    return [vl1+vl2,vl1*vl2,vl1/vl2,vl1-vl2]
}

console.log(valores(5,5))

/*

02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

tipoDeTrincagulo=(lad1,lad2,lad3)=>{
   
   if (lad1===lad2 || lad2===lad3|| lad1===lad3) {
    if(lad1===lad2 && lad2===lad3){
        console.log("triangulo equilatero")}
else{console.log("triangulo isoceles")}
   } else {
    console.log("triangulo escaleno")
    
   }
}

tipoDeTrincagulo(5,5,5)
tipoDeTrincagulo(5,5,4)
tipoDeTrincagulo(5,6,7)


/*03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

let baseExpoente=(base,expoente)=>{
    for(i=1;i<expoente;i++){
        return Math.pow(base,expoente)
        
    }
    return base
}

console.log(baseExpoente(7,3))

/*04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.8*/

function resto(divisor,dividendo){
    return divisor%dividendo
}
console.log(resto(81,2))

/*05) ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/


function retornaramoeda(dinheiro1=0.1,dinheir2=0.2){
    console.log((dinheiro1+dinheir2).toFixed(2))

}

retornaramoeda()

/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

/*07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

formulaBascara=(a=3,b=5,c=2)=>{
let resultado=(Math.abs(b*b)-(4*a*c))

if(resultado < 0){
    return "negativo"
}else{
    return "positivo"
}


}

console.log(formulaBascara())

/*08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

function jogos(pontos){
let pontuacao=0
let recorde=0
let cont=0
    for( let ponto in pontos){
      
        if(pontos[ponto]<pontos[ponto-1]){
            pontuacao = ponto
          
        }

        if(cont<pontos[ponto]){
            cont=pontos[ponto]
            recorde+=1
            console.log(cont)
           }
    }

    console.log(pontuacao,recorde-1)
}

pontos=[10,20,8,25,3,0,30,1]


jogos(pontos)

/*09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function notas(nota){
    let valor=0
 if(nota<38){
    return 'reprovado'
 
 }else{
    
  return arredondar(nota)
 }   


 function arredondar(nota){
    console.log('entrou')
    if(nota%5>2){
        return nota+(2-(nota%2))
        
        
    }else{
        return nota
        
    }


}

}

console.log(notas(68))


/*10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

edivisivel=(ediv)=>{
    return ediv%3===0
}

console.log(edivisivel(9))

/*11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))

/*12)​ Faça um algoritmo que calcule o fatorial de um número.*/

fatorial=(fator)=>{
    let resulta=1
    for(i=0;i<fator;i++){
        
        resulta *=fator
        console.log(resulta)
    }
    console.log(resulta)
}

fatorial(5)

