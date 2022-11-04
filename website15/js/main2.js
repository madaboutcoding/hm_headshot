// Lets have button on which we would like to bind click event
function onButtonClick(event){
    alert(event.target.id+" clicked!");
}
$(document).ready(function(){

    $("#button2").on("click",function(event){
        alert(event.target.id+" clicked!");
    })
});