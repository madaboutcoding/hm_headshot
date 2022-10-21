const destinations=["DELHI","MUMBAI","BHUJ","CHENNAI"]
for(let i=0;i<4;i++){
    for(let j=i+1;j<4;j++){
        let temp=destinations[i];
        if(destinations[j]<destinations[i]){
            destinations[i]=destinations[j]
            destinations[j]=temp;
        }
    }    
}
// console.log(destinations);
// destinations.forEach(destination=>console.log(destination));
destinations.forEach(d=>console.log(d));