interface People{
    fullName: string,
    age: number
    sayHello():void;
    isMale(): boolean
}

interface Role{
    learning():void
    getIncome(): number
}

let p1: People={
    fullName: "Code",
    age:20,
    sayHello(){
        console.log("heello")
    },
    isMale: () => false
}

class Student implements People, Role{
    fullName: string="";
    age: number=0;
    ipk?: number

    constructor(fullName: string, age: number){
        this.fullName = fullName
        this.age = age
    }

    learning(): void {
       console.log("learning")
    }
    getIncome(): number {
        throw new Error("Method not implemented.");
    }

    sayHello(): void {
        throw new Error("Method not implemented.");
    }
    isMale(): boolean {
        throw new Error("Method not implemented.");
    }

}

let stud1 = new Student("code",12)

stud1.learning()


