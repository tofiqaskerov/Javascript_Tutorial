/* 
    Slice() - sətrin bir hissəsini çıxarır
    və orijinal sətri dəyişmədən onu yeni sətir kimi qaytarır

*/

/* 
    Slice() - extracts a section of a string
    and returns it as a new string, without modifying the original string
*/


let fullName = "Tofiq Askerov";
let fullName1 = "Sakhina Mammadzade"
let firstName;
let firstName1
let lastName;
let lastName1;

firstName = fullName.slice(0,5); // ilk parametr baslangic indexini teyin edir. 2-ci parametr nece sira gedeceyini gosterir ----  the first parameter specifies the starting index. The 2nd parameter shows how to proceed;
lastName = fullName.slice(6)
firstName1 = fullName1.slice((fullName1.indexOf(" ") + 1));
lastName1 = fullName1.slice(0, fullName1.indexOf(" ")),



console.log(lastName1);
console.log(firstName1);
console.log(firstName);
console.log(lastName);
