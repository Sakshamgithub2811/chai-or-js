/*
1. const used to define constants 
2. 3 types to declare variables 1. let (most prefrable) 2.var (not prefrable) 3. without any keyword .
3. if any variable is not initialize with any value it contains undefined by js nature . 
*/
const accountId = 144553
let accountEmail = "saksham@gmail.com"
var accountPassword = "12345"
accountCity = "Gwalior"
let accountState;

//accountId = 2 // not allowed

console.log(accountId);

accountEmail = "sak@gmail23.com"
accountPassword = "1212121"
accountCity = "beglau"
/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
