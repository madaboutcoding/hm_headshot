const App=(function(){
    this.init=function(){ console.log("init() called");    }
    this.service=function(){console.log("service() called");}
    this.destroy=function(){console.log("destroy() called");}
});

const myApp=new App();
myApp.init();
myApp.service();
myApp.destroy();