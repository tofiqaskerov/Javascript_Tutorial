
/* 
   new Map = yeni map yaradir. Map obyektlerle eyni isi gorur.
   key ve value-si olur. 
*/

/* 
    new Map = object that holds key-value pairs of any data type
*/


const map = new Map(
    [   
        ["jeans", 30],
        ["t-shirt", 20],
        ["socks", 10],
        ["hats", 10],
    ]
)
map.set("shirts", 50)
map.delete("jeans")
console.log(map.get("t-shirt"))
console.log(map.has("t-shirt"));
// map.clear() ----  Map-in key ve value-sini silir
console.log(map.size);
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log("------------");

map.forEach((key, value) => console.log(`${key} $${value}`))
console.log("-------------");
for (const i of map) {
    console.log(i);
}




// const users = [
// {userName : "Tofiq", age: 19, graduated: true},
// {userName : "Sakina", age: 20, graduated: true},
// {userName : "Ruslan", age: 23, graduated: true},
// {userName : "Ayxan", age: 20, graduated: true},
// ]

// console.log(`${users[0].userName} = ${users[0].age}`);

// for(const i of users) console.log(i.userName);

// users.forEach(x => console.log(x.age))