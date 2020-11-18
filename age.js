var age=prompt("Enter your age");
if(age<0){
console.log("You are out of age , first get born and then come");
}
else if(age==21){
console.log("Happy 21st Happy Birthday");
}
else if(age%2!=0){
console.log("Your age is odd");
}
else if(age%Math.sqrt(age)==0){
console.log("Your age is a Perfect Square");
}
else{
console.log("You are said bye bye...");
}
