//Declaração de função
//Hosting

falaOI()

function falaOI(){
    console.log('oi')
}

falaOI()

//Function expression
const souUmDado = function(){
    console.log("Sou um dado!")
}
souUmDado()

//Arrow function
const funcaoArrow = () => {
    console.log("Função Arrow")
}
funcaoArrow()

//Função como um método de um objeto
const obj = {
    falar(){
        console.log('Método do objeto')
    }
}
obj.falar()

//Argumentos
function funcao01(){
    console.log("Oi - função 01!")
    console.log(arguments)
}
funcao01("Valor", 1, 2)

function funcao02(){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
funcao02(1,2,3,4,5,6,10,1000,300,20)

//Parâmetros indefinidos
function funcao03(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}
funcao03(1,2,3)

//Soma de variáveis com uma sendo presumida
function funcao04(a,b = 0){
    console.log(a+b)
}
funcao04(5, 23)

//Função 05
function funcao05(a = 0, b = 2, c = 4){
    console.log(a+b+c)
}
funcao05(undefined, 20, 132)

//Passando o objeto Parâmetro
function funcao06({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao06({nome: 'Peterson', sobrenome: 'Lobato', idade: 30})

let obj01 = {nome: 'Joao', sobrenome: 'Silva', idade: 31}
funcao06(obj01)

//Passando Array
function funcao07([valor1, valor2, valor3]){
    console.log(valor1,valor2,valor3)
}
funcao07(['André', 'Menezes', 32])

//Rest operator
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros)
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('/', 1, 10, 20, 30, 40)

//Return
function soma(a,b){
    return a+b
}
let total = soma(3,2)
console.log(total)