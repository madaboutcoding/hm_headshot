// ==================================================================
// Q2. Create a bucket list of places you would like to visit
// ==================================================================
// Algorithm:
// step 1: start 
// step 2: declare destinations = []
// step 3: accept the difffernt place names from the user 
// step 4: repeate step 3 until user wants to stop
// step N: end 
// ==================================================================
// array loop while/do-while 
// //infinite loop
// do{

// 	if(choice){
// 		break;
// 	}

// }while(true);

const destinations=[];
// do{
//     let destination=prompt("Enter your destination","Kurg");
//     destinations.push(destination);
//     // console.log("Do you want to continue?")
//     const choice=prompt("Do you want to continue?","y");
//     if(choice!='y'){
//         break;
//     }
// }while(true);


const destinations=[];
while(true){
    let destination=prompt("Enter your destination","Kurg");
    destinations.push(destination);
    const choice=prompt("Do you want to continue?","y");
    if(choice!='y'){
        break;
    }
}

for(let i in destinations){
        console.log(destinations[i]);
    }