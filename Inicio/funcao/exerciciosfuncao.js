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

/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

novoSalario=(plano,salario)=>{
    switch(plano){
        case 'a':{
            return salarios=((salario*10)/100+salario);
            break;
        }

        case 'b':{
            return salarios=((salario*20)/100+salario);
            break;
        }

        case 'c':{
            return salarios=((salario*30)/100+salario);
            break;
        }
        default:{
         return console.log("valor invalido")
        }
    }
}



console.log(novoSalario('c',1000))
console.log('resultado')

/*18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

extenso=(numero)=>{
    switch(numero){
        case 1:{
            console.log("um")
        break;
        }
        
            case 2:{
                console.log("dois")
            break;
            }
           
                case 3:{
                    console.log("tres")
                break;
                }
                
                    case 4:{
                        console.log("quatro")
                    break;
                    }
                   
                        case 5:{
                            console.log("cinco")
                        break;
                        }
                        default:{
                            console.log("valor invalido")
                            break;
                        }
    }

}

extenso(8)

/*19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.*/

function hamburgueria (cod,qtd){
    switch(cod){
        case 100:{
            console.log(`O valor do Cachorro quente ${qtd*3.00}`)
            break;
        }
        case 200:{
            console.log(`O valor do Hamburguer ${qtd*4.00}`)
            break;
        }
        case 300:{
            console.log(`O valor do Chesburguer ${qtd*5.50}`)
            break;
        }
        case 400:{
            console.log(`O valor do bauru ${qtd*7.50}`)
            break;
        }
        case 500:{
            console.log(`O valor do refrigerante ${qtd*3.50}`)
            break;
        }
        case 600:{
            console.log(`O valor do suco ${qtd*2.80}`)
            break;
        }
        default:{
            console.log('valor errado')
        }
    }
}

hamburgueria(400,2)

/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

let caixa=(money)=>{
    let nota100=0
    let nota50=0
    let nota10=0
    let nota5=0
    let nota1=0
while(money>0){
    if(money>=100){
        nota100=Math.floor(money/100)

        money=(money%100)
        
    }if(money>=50){
        nota50=Math.floor(money/50)
        money=(money%50)
        
    }
    if(money>=10){
        nota10=Math.floor(money/10)
        money=(money%10)
        
    }if(money>=5){
        nota5=Math.floor(money/5)
        money=(money%5)
        
    }
    if(money>=1){
        nota1=(money/1)
        money=(money%1)
        
    }
}
console.log(`notas de 1, ${nota1} `)
   console.log(` notas de 5, ${nota5}`)
    console.log(`notas de 10, ${nota10}`)
    console.log(`notas de 50, ${nota50}`) 
    console.log(`notas de 100, ${nota100}`)

}

caixa(280)

/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/
function convenio (idade){
    if(idade<10){
        return 100 + 80
    }if(idade<30){
        return 100 + 50

    }

    if(idade<95){
        return 100 + 95
    }
    else{
        return 100+130
    }
} 
 
console.log(`o valor pago ${convenio(9)}`)


/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

let valormaisjuros=(mesPagamento)=>{
    let valoraPagar=0
    let valor =200
    for(i=1;i<=mesPagamento;i++){
        valoraPagar+=(((valor*5)/100)+valor)
        valor=valoraPagar
        valoraPagar=0
    }
    return valor
}

console.log(valormaisjuros(3).toFixed(2))
 


/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function escola(nota1, nota2, nota3){
    return ((nota1*4)+(nota2*3)+(nota3*3)/10)
}

console.log(`A media ponderada e ${escola(10,5,7)}`)

/*24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/
j=11
while(j>0){
    console.log('Helo word')
    j--
}

/*25) ​Escrever um programa para exibir os números de 1 até 50 na tela. */

for(let i=1;i<51;i++){
    console.log(i)
}

/*26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.*/
let contador=1

for(contador=1;contador<101;contador++){
    if(contador%2==0){
        console.log(contador)
    }
}

/*27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

let crecimento=(altura, tcrecimento, altura2, tcrecimento2 )=>{
contador=0
    if(altura!=altura2){
        if(altura>altura2){
            if(tcrecimento2>tcrecimento){
                while(altura2<altura){
                    altura2*=tcrecimento2
                    altura*=tcrecimento
                   contador++
                }
                return contador
            }
        }
        else{

            if(altura<altura2){
                if(tcrecimento2<tcrecimento){
                    while(altura2<altura){
                        altura2*=tcrecimento2
                        altura*=tcrecimento
                       contador++
                    }
                    return contador
                }
            }

            
        }
    }
}

console.log(`a quantidade de anos ${crecimento(1.5,0.4,1.2,0.5)}`)

/*28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

let vetor=[1,5,3,7,88,15,45,45,42,42,78,49,22,11,22,55,88,99,77]
contador=0
for(percorrer in vetor){
    if((vetor[percorrer]%2)!==0){
      contador++
    }
}
console.log(`sao exatamente ${contador} os numeros impares`)


/*29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações.*/

let vetor2=[5,6,7,8,10,11,12,13,14,15,20,21,22,23]
let cont=0
for(percorre in vetor2){
    if(vetor2[percorre]>10 && vetor2[percorre]<20){
        cont++


    }
}

console.log(`entre 10 e 20 a ${cont}`)


/*30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. 


let vetore=[1,5,3,7,88,15,45,45,42,42,78,49,22,11,22,55,88,99,77]
let maior=0
let menor=0
for(veto in vetore ){
if(vetore[0]<vetore[veto+1]){
    maior=vetore[veto+1]
    menor=vetore[veto]

}

}


*/


/*31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.*/ 
