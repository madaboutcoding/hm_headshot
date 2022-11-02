const myPromise = new Promise(
    function(myResolve, myReject) {
        n=10;
       setTimeout(function(){ 
        if(n/0){
            myReject("Devide by Zero");
        }
        myResolve("I love You !!"); 
    
    }, 3000);
    
    }
)
myPromise.then(function(value) { console.log("value= "+value);})
         .catch(function(error){ console.log("error= "+error);})   ;
