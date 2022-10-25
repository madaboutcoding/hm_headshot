function myLogger(msg){
    console.log(msg);
}
function square(number){
		return number*number;
}
const number=4;
// const msg=square(number);
// myLogger(number+" square is "+msg)
	
// myLogger(number+" square is "+square(number));	
myLogger("Calling mylogger in myLogger :"+myLogger("trying"));	