
//abstract class
abstract class Person {
    constructor(public id:number, public fullName:string, public age:number){
        this.id = id
    }
}


//parent class
class Customer extends Person{
    constructor(id:number,  fullName:string,  age:number,public address: string){
        super(id,fullName,age)
    }
}

//parent class
class Employee extends Person{
    constructor(id:number,  fullName:string,  age:number,public salary: number){
        super(id,fullName,age)
    }

    setFullName(name: any):void{
        this.fullName = name
    }
}

class Pekerja{

}

class OB extends Person{

}

let emp1 = new Employee(101,"code",12,5_000)
let emp2 = new Employee(102,"rini",24,6_000)

let cust1 = new Customer(101,"cv",12,"jkt")

const persons: Person[] =[];
persons.push(emp1,emp2,cust1)

persons.forEach(person => console.log(`${person.id} ${person.fullName} ${person.age} `))