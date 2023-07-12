console.log('Hello World JavaScript!')

// console
console.error('Este é um erro')
console.warn('Este é um aviso')
console.log('Esta é uma mensagem!')

// variáveis
var x = 10
// maneiras mais modernas
let y = 15
const z = 20

if(1) { 
    let y = 55
}

console.log(x)
console.log(y)
console.log(z)

y = 25
console.log(y)

// Tipos de dados
const name = "Elton"
console.log(name)
console.log(typeof name)
// Numeros
const shirtsqty = 4
console.log(shirtsqty)
console.log(typeof shirtsqty)
// Não existe diferença entre int e float no JavaScripts, todos são numbers
const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)
// Boleano
const IsAproved = false //true ou false
console.log(IsAproved)
console.log(typeof IsAproved)
// Nula
let surname = null
console.log(surname)
console.log(typeof surname)
// Modificando a variavel null, agora é uma string
surname = "R. Oliveira"
console.log(surname)
console.log(typeof surname)
// Undefined - variável Indefinida
let age
console.log(age)
console.log(typeof age)
// Atribuindo um valor a variável que era indefinida
age = 25
console.log(age)
console.log(typeof age)
// Arrray
const languages = ["JavaScript", "PHP", "C#", "Python"]
console.log(languages)
console.log(typeof languages)

const user = {email: "elton@teste.com", password: "teste123", age: 25} //object literals
console.log(user)
console.log(typeof user)

// Métodos de string
const fullname = "Elton Ribeiro"
console.log(fullname.length)
// Modificando a string
const stringToArray = fullname.split(" ")
console.log(stringToArray)
console.log(fullname.toLocaleLowerCase())
console.log(fullname.toUpperCase())
// Buscando a primeira leta nesse caso do sobre nome, que inicia na oitava posição, conta a paritr de 0
console.log(fullname.indexOf("Ribeiro"))
// Separando o primeiro nome
console.log(fullname.slice(0, 5))

// Métodos de Array
const list = ["a", "b", "c", "d", "e"]
console.log(list.length)
console.log(list[2])
// Adiciona elemento na lista
list[5] = "f"
console.log(list)

console.log(list[list.length - 1])

// Adiciona um elemento ao final da lista
list.push("g")
console.log(list)
// Remove o ultimo elemento da lista
list.pop()
console.log(list)
// Remove o primeiro elemento da lista
list.shift()
console.log(list)
// Adiciona um elemento ao inicio da lista
list.unshift("a")
console.log(list)

// Objetos
const product = {
    name: "Camisa",
    price: 15.99,
    InStock: true,
    sizes: ["P", "M", "G"],
    "Main Color": "Blue"
}

console.log(product.name)
console.log("Main Color")

// Destructuring
const {price, InStock} = product

console.log(price)
console.log(InStock)

const [n1, n2] = list

console.log(n1)
console.log(n2)

// Json - JavaScript Object Notation
const dog = {
    name: "Alfred",
    age: 2,
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)
console.log(obj)

const jsonErrado = '{"name":"Teste","surname":"testando"}'

const obj2 = JSON.stringify(jsonErrado)

console.log(obj2)

// Estruturas condicionais
const a = 10
if(a > 8) {
    console.log("A é maior que 8")
}
// Triplo icons, 3 iguais, valida o tipo e o dado do objeto - validação segura
const b = "Elton"
if(b === "Alfred") {
    console.log("O nome é Alfred")
} else if (b === "Gisele") {
    console.log("O nome é Gisele")
} else {
    console.log("não encontramos o nome do usuario!")
}

// if ternário
const someNumer = 14
// ? vale por if, : vale por else. Abaixo diz: se someNumer que é 14 for menor que 20, me retorne Yes, do contrário me retorne No.
let testingANumber = someNumer < 20 ? "Yes" : "No"
console.log(testingANumber)

// Estruturas de Repetição
const myList = [1, 2, 3, 4, 5]
let counter = 0

// Concatenação
while(counter < myList.length) {
    console.log("Imprimindo: " + myList[counter])
    counter++
}

const mySecondList = ["a", "b", "c", "d", "e"]
// Concatenação Template literals
for(let counter = 0; counter < mySecondList.length; counter++) {
    console.log(`Imprimindo: ${mySecondList[counter]}`)
}

// Método de Array -> repetição
const names = ["Elton", "Alfred", "Gisele"]

names.forEach(function(name) {
    console.log(`O nome é: ${name}`)
})
// Modificando nomes
const modifiedNames = names.map(function(name) {
    if(name === "Elton") {
        return (name = "Sr. Elton")
    } else {
        return name
    }
})
// Buscando números por meio de fitlros
console.log(modifiedNames)

const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(number) {
    return number >= 5
})

console.log(bigNumbers)

// Reduce, reduz um array a um elemento
const sumAll = [10, 20, 30, 40 ,50].reduce(function(total, number)
{return total + number
})

console.log(sumAll)

// Funções - Functions
function minhaFuncao() {
    console.log("Olá função!")
}
// Chamando a função, é bom para reaproveitar códigos.
minhaFuncao()


function nomeCompleto1(nome1, sobrenome1) {
    console.log(`O nome completo é: ${nome1} ${sobrenome1}`) // uma das formas de se fazer, usando console.log direto em function
}
nomeCompleto1("Elton", "Ribeiro") // usado quando se passa console.log direto dentro de function
nomeCompleto1("Alfred", "Dog")

function nomeCompleto(nome, sobrenome) {
    return `O nome completo é: ${nome} ${sobrenome}` // return, maneira mais usada.
}
console.log(nomeCompleto("Elton", "Ribeiro")) // usado quando insere return
console.log(nomeCompleto("Alfred", "Dog"))

// criando uma variável a partir do retorno da function
const meuNomecompleto = nomeCompleto("Gisele", "Marques")
console.log(meuNomecompleto)

// Método mais profissional: ao invés de usar parametro declarado, usamos variáveis
const primeiroNome = "Elton"
const segundoNome = "Ribeiro"
console.log(nomeCompleto(primeiroNome, segundoNome))

// arrow functions
const myArrowFunction = (a, b) => {
    return a + b
}
console.log(myArrowFunction(2, 5))

const mySimplesArrowFunction = (a, b) => a + b
console.log(mySimplesArrowFunction(5, 5))

// Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    }
}

const socks = new Product("Meia branca", 10.99)
console.log(socks.name)
console.log(socks.price)

const shirt = new Product("Camisa preta", 22.99)
console.log(shirt.name)
console.log(shirt.price)

console.log(shirt.productDetails())

// Herança
class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }

    showAdjective(adjective) {
        return `O ${this.name} é muito ${adjective}`
    }

    // static, pode ser utilizado sem classe
    static sayHello() {
        console.log("Hello")
    }
}
const tenis = new SuperProduct("Tênis vermelho", 59.90, "42")

console.log(tenis.name)
console.log(tenis.size)

console.log(tenis.showAdjective("Bom"))

SuperProduct.sayHello()

//  DOM - Document Object Model - Seleção de elementos
const title = document.getElementById("title")

console.log(title)

// querry selector
const sameTitle = document.querySelector("#title")

console.log(sameTitle)

const texts = document.querySelectorAll(".text")
console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

// Manipulação de elementos
title.textContent = "Mudei o texto"

texts[0].innerHTML = "<spam>Alteeramos o HTML deste elemento</spam>"

texts[1].style.backgroundColor = "red" // no CSS é o mesmo que background-color: red

texts[2].classList.add("my-class")

texts[2].classList.remove("text")

texts[3].remove()

// Eventos
const btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
    console.log("clicou!")
    texts[2].style.color = "blue"
})