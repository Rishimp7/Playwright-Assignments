let s = "Hello World"

function lenOfLastWord(s) {
    
    word = s.split(" ");

// Get the last word from word

Last_word = word[word.length-1]

// Return the length of the last word

return Last_word.length

}
const len_Word = lenOfLastWord(s)
console.log(len_Word);


