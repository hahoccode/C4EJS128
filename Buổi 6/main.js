let x = 20;
let y = 10;


let result = x++ + ++x + y-- - --y;
// result    20      22  10   8
// x=20       21     22   22    22
// y=10       10      10  9     8



//            20 + 22 + 10 - 8 = 44
//            21 + 21 + 9 - 9
//           21  + 21 + 9 - 11 = 40  false
console.log(x);
console.log(y);
console.log(result);