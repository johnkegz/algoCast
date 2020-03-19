// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let word = [];
    for(let char of str.split(" ")){
        word.push(char[0].toUpperCase() + char.slice(1))
    }
    return word.join(" ");
    }
    
capitalize('i love breakfast at bill miller bbq');

module.exports = capitalize;

// function capitalize(str) {
//     let finalSentence = '';
//     let i = 0;
//     for(i=0; i < str.length; i++){
//         if(i === 0){
//             finalSentence = finalSentence + str[parseInt(i)].toUpperCase()
//         }
//         else if(str[i] === " "){
//             finalSentence = finalSentence + str[i];
//             finalSentence = finalSentence + str[parseInt(i)+1].toUpperCase()
//             i++;
//         }
//         else{
//         finalSentence = finalSentence + str[i];
//         }
//     }
//     return finalSentence;
//     }
