let n1=100;
let n2=5;
const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        //do something 100%3!=0        
        if(n1%n2!=0){
            resolve(n1 +" is not divisible by"+n2)
        }else{
            reject(n1 +" is divisible by"+n2)
        }
        },3000)
});

myPromise.then(v=>console.log("value= "+v))
         .catch(e=>console.log("error: "+e))