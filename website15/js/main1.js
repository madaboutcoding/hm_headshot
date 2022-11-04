// console.log("main.js loaded");
// Function which gives access to the jQuery library is $ or jQuery
// Usually we use $()=> accepts the object on which we want to work
// webpages are presented by document object in js
$(document).ready(function(){
    alert("Welcome to Jquery");
});

// step1: Document will be rendered 
// step2: Document is ready event will be called
// Step3: since document is ready it will call the inner anonymous function
// step4: inner anonymous function will call alert()