const Counter=(function(){
    let counter=0;
    function changeVal(value){
        return counter=counter+value;
    }
    return{
        value:()=>{return changeVal(0)},
        incr:()=>{return changeVal(1)},
        decr:()=>{return changeVal(-1)},
    }
});

const counter=[new Counter(),new Counter(),new Counter()];  

function decrCounter(index){      
    const span0=document.getElementById(index);
    span0.innerText=counter[parseInt(index)].decr();
}

function incrCounter(index){    
    const span0=document.getElementById(index);
    span0.innerText=counter[parseInt(index)].incr();
}