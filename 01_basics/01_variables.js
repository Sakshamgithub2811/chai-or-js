const accountId = 144553
let accountEmail = "hitesh@google.com"  
var accountPassword = "12345" 
accountCity = "Jaipur"


// accountId = 2 not allowed 
accountEmail = "fdsafa.com"
accountPassword = "34232";
accountCity = "bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

// Prefer not to use var because of issue on block scope and functional scope 
// let -> block scope 
// var -> functional scope 
