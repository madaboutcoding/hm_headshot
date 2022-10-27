function onButtonClick(){
    //We are getting values of input fields
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    //we are getting span element to modify content
    const errUserName=document.getElementById("errUserName");
    const errEmail=document.getElementById("errEmail");

    console.log("userName: "+userName+" email: "+email);
    if(userName==" "||userName.length==0){
        errUserName.innerText="Please enter the User Name";
        errUserName.style.color="red";
        return false;
    }else{
        errUserName.innerText="";       
    }
    if(email==" "||email.length==0){
        errEmail.innerText="Please enter the email";
        errEmail.style.color="red";
        return false;
    }
    else{
        errEmail.innerText="";        
    }
    return true;
}