

class User{
    constructor(name, age, nationality){
        this.name = name;
        this.age = age;
        this.nationality = nationality
    }
    info(){
        console.log(`Hello ${this.name}`);
    }
}

const user1 = new User("Tofiq", 19, "Azerbaijan");
const user2 = new User("Sakina", 20, "Azerbaijan");
const user3 = new User("Ruslan", 23, "Azerbaijan");
const user4 = new User("Ayxan", 21, "Azerbaijan");


const users = [user1,user2,user3,user4]

console.log(users[0].age);
console.log(users[1].age);
console.log(users[2].age);
console.log(users[3].age);

console.log("--------------------");

users[0].info()
users[1].info()
users[2].info()
users[3].info()
console.log("----------------------");

differentiation(users)

function differentiation(users){
    for(const user of users){
        user.info()
    }
}