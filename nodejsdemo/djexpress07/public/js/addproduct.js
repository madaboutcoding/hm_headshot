$(document).ready(function(){
    $("#formAddProduct").on("submit",function(event){
        event.preventDefault();
        const pid=$("#pid").val();
        const pname=$("#pname").val();
        const unitPrice=$("#unitPrice").val();
        
        if(pid==null || pid==undefined){
           $("#pidHelp").text="Please enter valid product id";      
           return false;      
        }
        if(pname==null || pname==undefined){
            $("#pnameHelp").text="Please enter valid product Name";            
            return false;
         }
         if(unitPrice==null || unitPrice==undefined){
            $("#unitPriceHelp").text="Please enter valid unitPrice";   
            return false;         
         }
        return true;
    })
});