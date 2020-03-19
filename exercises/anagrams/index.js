// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

if(strCleanUp(stringA) === strCleanUp(stringB)){
    return true;
}
return false;
}

// Create function for character map
const strCleanUp = wordString => {
    return wordString.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}


module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const _objA = characterMap(stringA);
//     const _objB = characterMap(stringB);
    
//     if(Object.keys(_objA).length !== Object.keys(_objB).length){
//         return false;
//     }
//     for(let element in _objA){
//         if(_objA[element] !== _objB[element]){
//             return false
//         }
//      }
//      return true;
//     }
    
//     // Create function for character map
//     const characterMap = wordString => {
//         let finalObj = {};
//         const newString = wordString.replace(/[^\w]/g, "").toLowerCase();
        
//         for(let element of newString){
//             if(finalObj[element]){
//                 finalObj[element] = finalObj[element] + 1;
//             }
//             else{
//             finalObj[element] = 1
//         }
       
//     }
//     return finalObj;
//     }
