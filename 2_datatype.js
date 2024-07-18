/* ------------------------ */
/*         DATATYPE         */
/* ------------------------ */

/* ---------------------------------- */
/*        PRIMITIVE DATA TYPES        */
/* ---------------------------------- */

// tek bir değer tutabilen değişkenler
// number,string,null,undefined,boolean,bigInt

x = 15
y = null
let z ;

console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x);

//number
// ondalıklı sayı, negatif ve pozitif sayı değerlerini tanımladığı değişken türüdür.

yas = 40;
sayi = 15;

sonuc = yas + sayi
console.log(sonuc);

const pi = Math.PI
console.log(pi);

//round
let yuvarla = Math.round(pi)
console.log(yuvarla);

//trunc
let tamkisim = Math.trunc(pi)
console.log(tamkisim);


//to Fixed
let fixedSonuc = pi.toFixed(2)
console.log(fixedSonuc);
// let fixed = Math.PI(2)
// console.log(fixed); // hata verdi//

//ceil
let ceil = Math.ceil(pi)
console.log("ceil",ceil);

//floor
let floor = Math.floor(pi)
console.log("floor",floor);

// üs alma
console.log(Math.pow(4, 4));

//karekök alma
console.log(Math.sqrt(10000));


/* ---------------------------------- */
/*          STRING DATA TYPE          */
/* ---------------------------------- */
// string içindeki değerlere ulaşılır ancak değiştirilemez.

let isim = "baydar"
let str1 = 'merhaba dünya'
let str2 = `benim adım ${isim}`
let str3 = `${str1} nasılsın`
let kacis = "Benim dogum gunum \"7 mart\"" //kacıs operatoru
let str4 = `Benim doğum günüm "18 haziran"`
let str5 = new String("hello world")


console.log(typeof isim);
console.log(typeof str1);
console.log(str2);
console.log(str3);
console.log(str4); 
console.log(str5);
console.log(kacis);
console.log(typeof str5);

console.log(str1[0]);

//`` stringleri dinamik olarak kullanmayı sağlar

let tckn = 777989898008
const isims = "baydar"

let cumle = `müsterimizin tcsi: ${tckn}dir adı: ${isims} dir`
console.log(cumle);

/* ---------------------------------- */
/*               BOOLEAN              */
/* ---------------------------------- */

let deger = true

if (true){
    console.log("calisti");
}
else {
    console.log("calismadi");
}

let ab = 122

console.log(Boolean(ab));


/* ---------------------------------- */
/*                NULL                */
/* ---------------------------------- */

let personl = null;
console.log(typeof personl);
console.log(null + 5);

/* ---------------------------------- */
/*              UNDEFINED             */
/* ---------------------------------- */

let telno;
console.log(telno);
console.log(typeof telno);

telno = 090909090
console.log(typeof telno, telno);

let Sonuc = pi.toFixed(2)
console.log(typeof Sonuc); // to Fixed numberı stringe çevirir.

let num1 = 10;
let strnum = "99";
console.log(num1 + strnum);
console.log(num1 * strnum);




/* ---------------------------------- */
/*                 NAN                */
/* ---------------------------------- */

//not a number//

console.log("baydar"/10);

let result = 5
console.log(result);
console.log(isNaN(result));

/* ---------------------------------- */
/*       NONPRIMITIVE DATA TYPES      */
/* ---------------------------------- */

// Array[], Object{}, Function

let personelList = ["Ali","Ahmet","Mehmet"] 
let personelData = {name:"Ali", surname:"Baydar", age:"75"}

// function
function hesapla() {

}