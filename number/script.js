// get element
let resultNumber = document.getElementById("textResult");


function numOdd() {
    let inputNumber = document.getElementById("input");
    let num ="";

    for (let i = 1; i <= inputNumber.value; i++){
        if ( i % 2 === 1){
        num += i + "-";
        }
    }
    resultNumber.innerHTML = num;
}
function numEven() {
    let inputNumber = document.getElementById("input");
    let num ="";

    for (let i = 1; i <= inputNumber.value; i++){
        if ( i % 2 === 0){
        num += i + "-";
        }
    }
    resultNumber.innerHTML = num;
}
function numPrime() {
    let inputNumber = document.getElementById("input");
    let elements = "";

    for (let i = 1; i <= inputNumber.value; i++){
        let bil = 0;
        for ( let j = 1; j <= i; j++){
            if ( i % j == 0) {
                bil += 1;
            }
        }
        if ( bil == 2 ){
        elements += i + "-";
        }
    }

    resultNumber.innerHTML = elements;
    // numPrime();
}




// function numPrime(){
//     var bil = document.getElementById("input").value;
//     var arr = [];
//     let val = 2;
//     arr.push(val);
//     while (arr.length <= bil){
//         val++;
//         var bilPrima = true;
//         for (let i = 1; i <= bil; i++){
//             if (val % arr[i] == 0 ){
//                 bilPrima = false;
//                 break;
//             }
//         }
//         if (bilPrima){
//             arr.push(val);
//         }

//     resultNumber.innerHTML =arr;
//     }
// }
































// function numPrime() {
//     let resultNumber = document.getElementById("input")
//     let pembagi = 0;

//     for (let i = 1; i <= resultNumber.value; i++){
//         if ( resultNumber.value % i == 0){
//         pembagi++;
//         }
//     }
//         if (pembagi == 2){
//             console.log("prima")
//         } else {
//             console.log("${i} bukan prima")
//         }
        
//         resultNumber.innerHTML = pembagi;

// }

// const apakahPrima = (angka) => {
//     let pembagi = 0;
//     for(let i=1; i <= angka; i++){
//       if(angka%i == 0){
//         pembagi++
//       }
//     }
//     if(pembagi == 2){
//       console.log("prima")
//     }else{
//       console.log("bukan prima")
//     }
//   }
  
//   // TEST CASES
//   apakahPrima(0); //prima
//   apakahPrima(3); //prima
//   apakahPrima(4); //bukan prima
//   apakahPrima(9); //bukan prima



