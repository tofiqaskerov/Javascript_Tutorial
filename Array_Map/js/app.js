/* 
   array.map() =  metodu arrayin hər bir elementi
    üçün funksiya çağırır ve yeni bir array yaradir.
    executes a provided callback function once for each array element and creates a new array
*/


/* 

  array.map() =  executes a provided callback function once for
   each array element and creates a new array

*/


let nums = [1, 4, 8, 9, 2];
let squares = nums.map(square)
let cubes = nums.map(cube)

function cube(e) {
    return e * e * e
}

function square(e) {
    return e * e
}
squares.forEach((e) => {
    console.log(e);
})
console.log("-------------------");
cubes.forEach((e) => {
    console.log(e);
})


const users = ["TOFIQ", "SaKina", "rUslan", "aykhaN"]

const newUsers = users.map(u => {
    return{userName: u, shortName: `${u[0]}.`, newName: `${u[0].toUpperCase()}${u.slice(1).toLowerCase()}`};
})

console.log(newUsers);