

/* 
   array.sort() = methodu arrayi mentiqi ardicilliga uygun duzur
*/

/* 
  array.sort() = method sorts the array into logical order;
*/

let nums = [ 4,1,5,10,14,20,18,50,47]

console.log(nums.sort((a,b) => a-b));


let nums1 = [5,7,3,8,2,30,45,28]

nums1 = nums1.sort(descendingSort) 
nums1 = nums1.sort(ascendingSort) 
nums1.forEach(e =>{
   console.log(e);
})
function descendingSort(x,y){  // azalan sira
   return y-x
}

function ascendingSort(x,y){   // artan sira
   return x-y
}

