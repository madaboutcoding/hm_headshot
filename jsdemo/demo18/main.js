const counter=(function(){
    let myCounter=0;
    function increment(){
        return ++myCounter;
    }
    function decrement(){
        return --myCounter;
    }
    function getMyCounter(){
        return myCounter;
    }

    return {
        incr:function(){
            return increment();
        },
        decr:function(){
            return decrement();
        },
        value:function(){
            return getMyCounter();
        }
    };

})

const counter1=new counter();
console.log(counter1.value());
console.log(counter1.incr());
console.log(counter1.decr());