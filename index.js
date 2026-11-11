/*----GET METHOD----*/
// const URL="http://localhost:3000/details";
// fetch(URL)
// .then((res)=>res.json())
// .then((res)=>console.log(res))

/*----POST METHOD----*/
/*const URL="http://localhost:3000/details";
let options={
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "id": 4,
        "name":"sathwik",
        "age": 22 
    })
};

fetch(URL, options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
})
.catch((res)=>{
    console.log(res.status, res.statusText);
});*/

//----PUT METHOD----//
/*const URL="http://localhost:3000/details/4";
let options={
    method:"PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({  
        "name":"Vinay",
        "age": 23 
    })
};

fetch(URL, options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
})
.catch((res)=>{
    console.log(res.status, res.statusText);
});*/

//----PATCH METHOD----//
/*const URL="http://localhost:3000/details/2";
let options={
    method:"PATCH",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({  
        "name":"Praveen",
        "age": 23 
    })
};

fetch(URL, options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
})
.catch((res)=>{
    console.log(res.status, res.statusText);
});*/

//----DELETE METHOD----//
const URL="http://localhost:3000/details/3";
let options={
    method:"DELETE"
};
fetch(URL, options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
})
.catch((res)=>{
    console.log(res.status, res.statusText);
}); 
