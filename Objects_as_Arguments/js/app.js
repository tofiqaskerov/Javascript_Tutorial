


class Users{
    constructor(name, age, nationality){
        this.name = name;
        this.age = age;
        this.nationality = nationality
    }

}

const tofiq = new Users("Tofiq", 19, "Azerbaijan");
const sakina = new Users("Sakina", 20, "Azerbaijan");
const ruslan = new Users("ruslan", 23, "Azerbaijan");
const ayxan = new Users("ayxan", 21, "Azerbaijan" );
changeNationality(tofiq)
changeAge(tofiq)
displayInfo(tofiq)

function displayInfo(info){
    console.log(info.name);
    console.log(info.age);
    console.log(info.nationality);
}


function changeNationality(info, info1){
    info.nationality = "Spain"
}

function changeAge(info){
    info.age = 20;
}