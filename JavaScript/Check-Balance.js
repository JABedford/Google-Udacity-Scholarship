/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// create a program for an ATM transaction according to the supplied flow chart

var balance = 1;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day.");
    
} else if (checkBalance === true && balance > 0 && isActive) {
    console.log("Your balance is $"+balance.toFixed(2)+".");
    
} else if (checkBalance && !isActive) {
    console.log("Your account is no longer active.");
    
} else if (checkBalance && isActive && balance === 0) {
    console.log("Your account is empty.");
    
} else {
    console.log("Your balance is negative. Please contact bank.");
}
