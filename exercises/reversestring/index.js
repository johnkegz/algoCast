// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let newString = '';
    for(let character of str){
        newString = character + newString;
        // debugger;
    }
    console.log('newString ++', newString);
    return newString;
    // debugger;
    // return str.split('').reduce((rev, char) => char + rev
    // , '')
}
reverse('abc')

module.exports = reverse;

// // method one - using arrays
// return str.split('').reverse().join('');

// second method
// let newString = '';
//     for(let character of str){
//         newString = character + newString;
//     }
//     console.log('newString ++', newString);
//     return newString;

// Third method
// let counter = 0;
// while(counter < str.length){
//     newString = str[counter] + newString;
//     counter++
// }
// console.log("herere ++++", newString);
// return newString;


