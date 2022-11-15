console.log("login.js loaded");

$(function () {
    $("#formLogin").on("submit", function () {
        const userName = $("#userName").val();
        const password = $("#password").val();        
        if(userName==="admin"&&password==="P@ssword123"){
            return true;
        }else{
        $("#errUserName").text("Please enter valid UserName")
        $("#errPassword").text("Please enter valid Password")
        return false;
        }
        
    })
})