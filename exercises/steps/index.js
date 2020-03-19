// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, dec = 1) {
    if(n === 0){
        return;
    }
    console.log(n);
    steps(n-dec)
}
steps(4);
module.exports = steps;


// function steps(n) {
//     for(let row=0; row< n; row++){
//         let stair = ''
//         for(let column = 0; column<n; column++){
//             if(column <= row){
//                 stair += '#'
//             }
//             else{
//                 stair += ' '
//             }
//         }
//         console.log(stair);
//     }   
// }


// function steps(n) {
//     let space = '';
//     for(let i = n; i>0; i--){
//         space = space + ' ' 
//     }
//     let op = space.split("");
//     for(let i = 0; i<op.length; i++){
//         op[i] = '#';
//         console.log(`${op.join("")}`);
//     }    
// }
