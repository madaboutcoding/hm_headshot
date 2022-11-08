$(document).ready(function(){
   //Tag Selector 
//    $("button").on("click",()=>{
//         $("h1").css("backgroundColor","navy");
//         $("h1").css("color","white");
//         // $(":button").hide();
//         $("button:even").hide();
//    });

// $("button").click(function(){
//     $("h1").css("backgroundColor","yellow").css("color","navy");
// });

$("button").on(
    {
    mouseenter: function(){
      $("h1").css("background-color", "lightgray");
    },
    mouseleave: function(){
      $("h1").css("background-color", "lightblue");
    },
    click: function(){
      $("h1").css("background-color", "yellow");
    }
  }
  );
});