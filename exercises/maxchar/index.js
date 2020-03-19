// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let newStr = {};
    let max = 0;
    var maxChar = '';
    for(let character of str){
        newStr[character] = newStr[character] + 1 || 1;
        // if(newStr[character]){
        //     newStr[character]++ 
        // }
        // else{
        //     newStr[character] = 1
        // }
        
    }

    for(let char in newStr){
        if(newStr[char] > max){
            maxChar = char
            max = newStr[char]
        }
    }
    return  maxChar;
}

module.exports = maxChar;
