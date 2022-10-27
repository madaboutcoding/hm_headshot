// (function(){
//     console.log("Closure is called");
// })();
//closure with ()();
const app=(function(){
    this.init=function(){
        console.log("App loading in progress");
    }
    this.service=function(){
        console.log("App is serving the request");
    }
    this.destroy=function(){
        console.log("Shut down the app");
    }
    this.init();
    this.service();
    this.destroy();
})();


app();
