const destinations=[];
while(true){
    const destination=prompt("Enter the destination Name");
    if(destinations.indexOf(destination)==-1){
        destinations.push(destination);
    }else{
        alert(destination+" already added!");
    }
    const choice=prompt("Do you want to continue?","n");
    if(choice!='y'){
        break;
    }
}
console.log("before sort ");
for(let i in destinations){
    console.log(destinations[i]);
}
console.log("after sort");
destinations.sort();
for(let i in destinations){
    console.log(destinations[i]);
}

