 const getUserById = async ()  =>{
    let user =  await axios("https://fakestoreapi.com/products")
    console.log(user.data);
  
}
getUserById()



const all =  status  =>{
    return new Promise(async(resolve, reject) =>{
        if(status === 200){
            const {data} = await axios("https://fakestoreapi.com/products")
            resolve(data)
        }else{
            reject("Error cixdi")
        }
    })

}
all(400).then(res => console.log(res)).catch(error => console.log(error))




const getProduct = (status) =>{
    return new Promise((resolve, reject) =>{
        status === 200 ? resolve("Success") : reject("Failed")
    })
}
getProduct(200).then(res => console.log(res)).catch(error => console.log(error))


const getComputers = (status) =>{
    return new Promise(async(resolve, rejected) =>{
   
        status === 200 ? resolve([
            {productName: "Windows", price:1700 },
            {productName: "Mac", price:4000 }
   
        ])
        : rejected("Error bas verdi")
    })
}

getComputers(200).then(res => console.log(res))


const  getAllProducts = (status) =>{
    return new Promise( async (resolve, rejected) =>{
         
        if(status === 200){
            const {data} = await axios("https://fakestoreapi.com/users")
            resolve(data)
        }else{
           rejected("Error cixdi")
        }
       
    })
}

getAllProducts(200).then(res => console.log(res)).catch(error => console.log(error))



