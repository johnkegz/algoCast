// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
   let chunked = [];
   for(let counter = 0;  counter < array.length; counter = counter+size){
        let chunks = array.slice(counter, size + counter)
        chunked.push(chunks)
   }
   console.log('chunked', chunked);
   return chunked;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)

module.exports = chunk;


// function chunk(array, size) {
//     let newArray = [];
//     let finalArray = [];
//     let counter = 0;
//     let counter2 = 0;
//     let sizeArr = array.length;
//     let nn = sizeArr - 1;
//     while(counter2 < array.length){
//         if(counter < size){
//             newArray.push(array[counter2])
//         if(counter2 === (nn)){
//             finalArray.push(newArray);
//         }
            
//         }
//         else{
//             console.log('ewArray', newArray);
//             finalArray.push(newArray);
//             newArray = [] 
//             counter =  -1;
//             counter2 = counter2 - 1;
//         }
//         counter++
//         counter2++
//     }
//     console.log('newArray +++', finalArray);
//     return finalArray;
// }

// function chunk(array, size) {
//    let chunked = [];
//    for(let char of array){
//         if(chunked.length === 0 || !chunked[chunked.length - 1]){
//             chunked.push([char]);
//            }
//         else if(chunked[chunked.length - 1].length !== size){
//             chunked[chunked.length - 1].push(char)
//         }
//         else{
//             chunked.push([char]);
//         }
//    }
//    return chunked;
// }

// function chunk(array, size) {
//     let chunked = [];
//     for(let char of array){
//         const last = chunked[chunked.length - 1];
//          if(!last || last.length === size){
//              chunked.push([char]);
//             }
//          else{
//              last.push(char)
//          }
//     }
//     return chunked;
//  }