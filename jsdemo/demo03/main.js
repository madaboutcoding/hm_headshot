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

for(let i in destinations){
    console.log(destinations[i]);
}