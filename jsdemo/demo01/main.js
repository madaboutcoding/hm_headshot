// Q1. Accept the city name from the job seeker as work location.
// e.g. Mumbai/Pune/ Ahmadabad/ Noida/ Delhi NCR/ Hydrabad/ Banglore/ 
//      Chennai
// *Note: Jobseeker Must select at least one of these 
// Print the list of Cities where the Recruiting company has offices.
// You will ask the Jobseeker/selected candidate to enter the choice
// for the city.
// ==================================================================
// Algorithm:
// step 1: start
// step 2: office_locations variable having value
// 		Mumbai/Pune/ Ahmadabad/ Noida/ Delhi NCR/ 
// 		Hydrabad/ Banglore/ Chennai
// step 3: print office_locations
// step 4: accept users prefered job_location
// step 5: print "You selected : <job_location>"
// step 6: end
// ==================================================================
// node-> all js logic -> Programming Basics

const office_locations = ["MUMBAI", "BANGLORE", "DELHI"];
console.log("Select one of the below office location")
for (let i in office_locations) {
    let j = parseInt(i) + 1;
    console.log(j + " " + office_locations[i]);
}
console.log("Plese enter your choice");
// const job_location=prompt("Enter city of your choice","Delhi");
// console.log("You selected : "+job_location);
const job_location = 1;
let msg = "You selected : ";
switch (job_location) {
    case 1:
        msg = msg + office_locations[job_location - 1];
        break;
    case 2:
        msg = msg + office_locations[job_location - 1];
        break;
    case 3:
        msg = msg + office_locations[job_location - 1];
        break;
        default:
        msg = "Delhi";
}
console.log(msg);