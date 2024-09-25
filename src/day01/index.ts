import { Calculator } from "./calculator";

//declare variables
const productId: number =10;
const productName: string = "TV"

// re-assign variable
let isAvailble: boolean = false;
isAvailble = true

console.log(`${productId} ${productName}`)

//declare function
function calcSalary(salary: number, overtime:number):number{
    return salary + (overtime * 50_000)
}

console.log(calcSalary(50_000,5))

const world = 'world'

function sayHello(who: string = world):string{
    return `Hello ${who}`
}

console.log(sayHello("code"))

// datatype any
function guessWho(who: any):string{
    if (typeof who === 'number'){
        return "you are number"
    }

    if (typeof who === 'string'){
        return "you are string"
    }

    return ""
}

console.log(guessWho(123))
console.log(guessWho("codie"))

// type == struct
type Height = number
type Weight = number

type Paket ={
    name: string
    height: Height
    weight: Weight
}

let myPaket: Paket={
    name: "tv",
    height: 12,
    weight: 2
}

console.log(`${myPaket.name}`)

type Category ={
    id: number
    name: string
}

const cate: Category={
    id:1,
    name: "Laptop"
}

console.log(`${cate.id} ${cate.name}`)

//call class calculator
let calc:number = new Calculator(0)
    .add(5)
    .multiply(2)
    .add(10)
    .value

console.log(`Result calc : ${calc}`)
    
