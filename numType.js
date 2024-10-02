function checkNum (num) {

    // Conditional statements to determine the type of the number
    if (num >0) {
        return "the number is Postive number."
    }

    if (num<0) {
        return "the number is negative number"
    }

    else {
        return "the number is Zero"
    }

    
}
// Declare and initialize the variable
let num = 56

let result = checkNum(num);
console.log(result);
