// for (let i=0;i<10;i++){
//     console.log(i+1)
// }
// function sequence(start = 0, step = 1) {
//     return function () {
//         let start1 = start;
//         start += step;
//         return start1;
//     };
// }

// let generator = sequence(10, 3);

// alert(generator()); //10
// alert(generator()); //13
// alert(generator()); //16

    

const width = prompt (' ширина контейнера в м.');
const height = prompt (' высота контейнера в м.');
const length = prompt (' длину контейнера в м.');
const diameter = prompt (' диметр трубы в метрах');


let sum = length * width;
let SPipe = Math.PI * Math.pow(diameter/ 2,2);
let metr = Math.floor(sum/SPipe)* height;
console.log(metr);


// let containerSquare;
// const squareContainer = function (w, h) {
//     containerSquare = w*h;
//     return containerSquare
// }

// let  ;
// const squarePipe = function (d) {
//     pipeSquare = Math.PI*((dPipe/2)*(dPipe/2));
//     return pipeSquare
// }

// squareContainer (wContainer, hContainer, lContainer);
// squarePipe (dPipe);

// let metres = Math.floor(containerSquare/pipeSquare);
// let pMetres = metres*lContainer;
// console.log (pMetres);







