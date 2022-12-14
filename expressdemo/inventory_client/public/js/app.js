console.log("app.js");
$(function(){
    const url='http://localhost:3000/api/products'
    $("#btnGetAll").on("click",()=>{
        $.ajax({url: url, success: function(result){
            // $("#root_all").html(JSON.stringify(result));
            result.forEach(p => {
                const li=document.createElement("li");
                $(li).html(p.pname)
                $("#root_all").append(li)  
            });
            
          }});
    })
    $("#getByPname").on("click",()=>{
        const pname=$("#pname").val();
        console.log(pname);
        $.get(url+'/bypname/'+pname,function(data, status){
            // alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            $("#root_bypname").text(JSON.stringify(data));
          })
        
    });
    $("#getByPid").on("click",()=>{
        const pid=$("#pid").val();
        console.log(pname);
        $.get(url+'/bypid/'+pid,function(data, status){
            // alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            $("#root_bypid").text(JSON.stringify(data));
          })
        
    })

});