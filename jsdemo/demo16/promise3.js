// if age >18 resolved otherwise reject
const age1=8;   //rejected
const age2=19;  //resolved
const age3=18; // rejected

const votingPromise=new Promise(function(resolve,reject){
    if(age3>18){
        setTimeout(resolve("Eligible for vote"),2000);
    }else{
        setTimeout(reject("Not Eligible for vote"),2000);
    }

});

votingPromise.then(v=>console.log(v))
             .catch(e=>console.log(e));