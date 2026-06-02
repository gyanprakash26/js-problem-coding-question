function asyncTask() {
    return new Promise((resolve, rejecct)=>{
            setTimeout(()=>{
            resolve("Task Completed");
        }, 2000);
    })
    
}
console.log(asyncTask().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}))