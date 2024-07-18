/* ------------------------ */
/*            JAVASCRIPT DE DEGİSKENLER            */
/* ------------------------ */

// const let
//const sabit değişmez

// const tckn = 34465655786
// tckn =  73774298920 //hata verir TypeError: Assignment to constant variable.

let toplam = 0;
console.log(toplam);
toplam = 50;

console.log(toplam);

// GLOBAL ALAN

const abc = 500;
{
  console.log(abc);
}

//  {
//     const aka = 10
//  }

//  console.log(aka); okumaz

//LOKAL ALAN
let deneme = "denendi basarili olundu";

function test() {
  console.log(deneme);
}

test();
console.log(deneme);
