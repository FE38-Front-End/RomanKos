const width = prompt (' ширина контейнера в м.');
const height = prompt (' высота контейнера в м.');
const length = prompt (' длину контейнера в м.');
const diameter = prompt (' диметр трубы в метрах');

// let arr=[];

// while(true) {
//     console.log("Hello,world");
// }



let sum = length * width;
let SPipe = Math.PI * Math.pow(diameter/ 2,2);
let metr = Math.floor(sum/SPipe)* height;
console.log(metr);











