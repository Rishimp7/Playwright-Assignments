// Function to reverse the string
function reverseString(rev) {
    
let reversed = ""

for (i = rev.length -1; i >=0; i--) {
reversed += rev[i];
       
}
console.log(`${reversed}`);
return reversed
}

// Function to check if the string is a palindrome
function check_palin(rev) {
    const reversed = reverseString(rev)
    if (rev === reversed)
        console.log(true);
    else console.log(false);
        
    }

reverseString("football")
reverseString("Racecar")
check_palin("noon")


