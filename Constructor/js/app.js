
/* 
    Constructor = Class-i cagiran zaman ise dusen ilk method-dur.
    Yeni class ise dusduyunde bir funksiyanin islemesi ucun ilk olaraq bu method isleyecek.
    Eger constructor teyin etmemisikse class ozu bos bir constructor yaradir 
*/


/* 
    Constructor = When calling the class, it is the first method you call.
    When a new class is created, this method will be used first to perform a function.
    If we don't specify a constructor, the class itself creates an empty constructor
*/


class student{
    constructor(name, age, gpa ){
        this.name = name;
        this.age = age,
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("Tofiq", 19, 4)
const student2 = new student("Sakina", 20, 4)

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study()
console.log("----------------");
console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study()


class Company{
    constructor(staff_number){
        this.staff_number=staff_number;
    }
    expenseCalculate(salary,bills,office_rent){ 
        let allSalary = this.staff_number*salary;
        return allSalary+bills+office_rent;
    }
}


let company = new Company(20);
let expense = company.expenseCalculate(2000,500,2000);
console.log(`One month total expense: ${expense} $ `);