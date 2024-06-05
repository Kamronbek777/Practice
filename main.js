// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring
// let numberOne = 1;
// let numberTwo = 2;

// console.log(numberOne + numberTwo);

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = '12';
// a = Number(a);
// console.log(a);

// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

// let random = Math.round(Math.random()*100)
// console.log(random);
// if (random % 2 == 0) {
//     console.log(`Juft son`);
// }else {
//     console.log(`Toq son`);
// }

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// let message = prompt("Enter string");
// if (message == "Mars") {
//     alert(message);
// }else {
//     alert("Mars it school");
// }

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring

// let arr = ['yunusabad', 'cambridge', 'level', 'one', 'sam'];
// let box = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < 5) {
//         console.log(arr[i]);
//     }else {
//         box.push(arr[i])
//     }
// }

// console.log(arr);
// console.log(box);
// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring
let juft = [];
let toq = [];

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(`Juft son - ${i}`);
        juft.push(i);
    }else {
        console.log(`Toq son - ${i}`);
        toq.push(i);
    }
}
console.log(juft, toq);