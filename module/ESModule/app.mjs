// Js was developed by basing on ECMAScript
// ECMA is just a  standardization
// ES5 ES6 ES7 current version is ES11
// ECMAScript 2015 => ES6
// We can say ES6 is one of the bigwig.ECMA
// let, const, Rest parameters, Destructuring, Arrow Function were included in ES6.
// including modules.
// Js module isn't the same with node module.
// but now, In Node, we can use not only node module but aslo js module.In node, The technique  is still at the experimental Stage. It has restriction and FileSystemWritableFileStream. 
// We can't use Js module and node module together. Common js set file extension as default (.js) but in ES6 set (.mjs).


//  first way
// export default function script(a, b){
//     return a + b
// }
// Second way
//  function script(a, b){
//         return a + b
//     }
// export default script
    
// third way
const ECMA = "ES6"
function script1(a, b){
    if(a>b) return "ES6"
    else return "not ES6"
}
function script2(a, b){
    let x = 0 
   do {
    console.log("do while loop");
    x++;
   } while (x < a);
   return x 
}
export {ECMA, script1, script2}

 
    