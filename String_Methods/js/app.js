// string propertileri ve methodlari ---- string properties and methods


let firstName = "Tofiq"
let surName = "   Askerov     "
let phone = "050-555-55-55"

console.log(firstName.length); // length elementlerin sayini gosterir ----  length shows the number of elements;
console.log(firstName.charAt(1)); // charAt deyiskenin index sirasina baxir ve hemin elementi geri donderir ---- charAt looks at the index of the variable and returns that element;
console.log(firstName.indexOf("f")); // indexOf daxil etdiyimiz elementin necenci indexde yerlesdiyini gosterir ----  indexOf shows how the entered element is located in the index

surName = surName.trim() // trim bosluqlari silir ---- trim removes empties
surName = surName.toUpperCase() // toUpperCase string deyerini boyuk yazdirir ---- toUpperCase Uppercases the string value;
surName = surName.toLowerCase() // toLowerCase string deyerini kicik yazdirir ---- toLowerCase Lowercases the string value;
console.log(surName);


phone = phone.replaceAll("-", "")
console.log(phone);