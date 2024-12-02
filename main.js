// 1.FOR  + break/continue ga oid masalalar
// ======================================
// 1-masala
// 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).

// for (let i = 1; i<=100; i++){
//     if (i==50){
//         break;
//     }
//     console.log(i);
// }

// ======================================
// 2-masala
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).

// for (let i = 1; i<=20; i++){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }

// ======================================
// 3-masala
// 1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).

// for (let i = 1; i<=30; i++){
//     if(i==6){
//         break;
//     }
//     console.log(i);
// }

// ===============================================
// 4-masala
// 1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.

// let counter = 0;
// for (let i = 1; i<=50; i++){
//     if( counter =3){
           
//     }
//     if (i % 7 == 0 ){
//          console.log(i);
//     }
// }


// 2.SWITCH-case gs oid masalalar

// ============================================
// 1-masala
// Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.

// let week = +prompt('hafta kunlarini kiriting')

// switch (week) {
//         case 1:
//         console.log('Dushanba');
//         break;
//         case 2:
//         console.log('Seshanba');
//         break;
//         case 3:
//         console.log('Chorshanba');
//         break;
//         case 4:
//         console.log('Payshanba');
//         break;
//         case 5:
//         console.log('Juma');
//         break;
//         case 6:
//         console.log('Shanba');
//         break;
//         case 7:
//         console.log('Yakshanba');
//         break;
//     default:
//         console.log('bunday hafta kuni mavjud emas');
//         break;
// }

// =================================================
// 2-masala
// Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.

// let month = + prompt('OY raqamini kiriting')

// switch (month) {
//   case 1:
//     console.log('Qish');
//     break;
//   case 2:
//     console.log('Qish');
//     break;
//   case 3:
//     console.log('Bahor');
//     break;
//   case 4:
//     console.log('Bahor');
//     break;
//   case 5:
//     console.log('Bahor');
//     break;
//   case 6:
//     console.log('Yoz');
//     break;
//   case 7:
//     console.log('Yoz');
//     break;
//   case 8:
//     console.log('Yoz');
//     break;
//   case 9:
//     console.log('Kuz');
//     break;
//   case 10:
//     console.log('Kuz');
//     break;
//   case 11:
//     console.log('Kuz');
//     break;
//   case 12:
//     console.log('Qish');
//     break;
//   default:
//     console.log("Bunday oy raqami mavjud emas");

//     break;
// }

// =================================================
// 3-masala
// Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.

// let num = +prompt("sonni kiriting");

// =================================================
// 4-masala
// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// let baho = +prompt("bahoni kiriting");
 
// switch (baho) {
//   case 1:
//     console.log("talabga javob bermaydi");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxwi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log('bu baho mavjud emas');
//     break;
// }

// 3.WHILE va do..while ga oid masalalar

// =================================================
// 1-masala
// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++
// }

// =================================================
// 2-masala
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

// let i = 10
// while (i>=1) {
//     console.log(i);
//     i--
// }

// =================================================
// 3-masala
// Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

// let num = +prompt('sonni kiriting')
// let sum = 0;
// while (num!=0) {
//     sum += num;
//     num = +prompt('sonni kiriting')
// }
// console.log(sum);

// =================================================
// 4-masala
// Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.

// let n= +prompt('sonni kiriting')

// while (n < 0) {
//     n= +prompt('sonni kiriting')
// }
// console.log(n);

// =================================================
// 5-masala
// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.

// let n = +prompt("sonni kiriting");

// let sum = 0;

// while (n >= 1) {
//     let lastnum = n % 10;
//     sum += lastnum;

//     n= Math.trunc(n/10)
// }
// console.log(sum);

// =================================================
// 6-masala
// Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.
// let n = +prompt("sonni kiriting");

// let counter=0;
// while (n > 0) {
//   n = +prompt("sonni kiriting");
//   if (n % 2 == 0) {
//     console.log(n);
//     counter++;
//   }
  
  
// }
// console.log(counter);

// =================================================
// 7-masala
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

// let i = 1;
// while (i <= 20) {
//   i++
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// =================================================
// 8-masala
// 1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

// let i = 1;
// while (i<=50) {
//   i++
//   if (i%5==0){
//     console.log(i);
//   }
// }

// =================================================
// 9-masala
// Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
// let num = +prompt("sonni kiriting");
// let sum = 0;
// while (num >= 1) {
//  sum = sum *10 + num % 10
//  num = Math.trunc(num/10)
// }
// console.log(sum);


// =================================================
// 10-masala
// 100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.

// let i = 100;
// while (i>1) {
//   i--;
//   if (i%10==0)
//     console.log(i);
// }


//=================================================
// 11-masala
// 1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.
// let i = 1;
// do {
//   console.log(i**2);
//   i++
// }while (i<= 100)


//=================================================
// 12-masala
// Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.
// let i = +prompt('sonni kiriting')
// while (i%5) {
//   i = +prompt('sonni kriting')
// }
// console.log(i);


//=================================================
// 13-masala
// Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.

// let n = +prompt("sonni kiriting");
// while (n < 10) {
//   n = +prompt("sonni kiriting");
// }
// console.log(n);
// =================================================
// 14-masala
// Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.
// let num = prompt('sonni kiriting')

// let counter = 0;
// while (num !='stop') {
//     if (Number(num)){
//         counter++
//     }
//      num = prompt("sonni kiriting");
// }

// console.log(counter);


//=================================================
// 15-masala
// Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).
//   let n = +prompt('sonni kiriting')
//   let sum = 0;
//   let counter = 0 ;
//  while (n!=0) {
//      sum += n;
//     counter++
//   n = +prompt("sonni kiring");
//  }
//  console.log(sum / counter);

// 4.TERNARY operatori ga oid masalalar

//=================================================
// 1-masala
// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
// let n = +prompt("sonni kiriting");
// n>0 ? console.log("Musbat son"): console.log("Manfiy son");



//=================================================
// 2-masala
// Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.
// let n = +prompt("sonni kiriting");
// n%2==0 ? console.log("Juft son"):  console.log("Toq son");


//=================================================
// 3-masala
// Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang
// let n = +prompt("sonni kiriting");
// n>100 ? console.log("katta"): console.log("kichik");



//=================================================
// 4-masala
// Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.
// let n = +prompt("sonni kiriting");
// let n2 = +prompt("sonni kiriting");
// n>n2  ? console.log(n):  console.log(n2);



//=================================================
// 5-masala
// Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
// let n = +prompt('sonni kiriting')
// n%3==0 && n%5==0 ? console.log("bo'linadi"): console.log("bo'linmaydi");


// 5.MATH methods ga oid masalalar 

// ==================================================
// 1-masala
// 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.
// console.log(Math.trunc(Math.random() * 100));


// ==================================================
// 2-masala
// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
// let num = +prompt("sonni kiriting")
// console.log(Math.trunc(num));


// ==================================================
// 3-masala
// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).
// let num = +prompt("sonni kiriting");
// console.log(Math.ceil(num));


// ==================================================
// 4-masala
// Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).
// let num = +prompt("sonni kiriting");
// console.log(Math.abc(num));

// 6.FOR ga oid masalalar

// ==================================================
// 1-masala
// 1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let i = 1;   i <= 50;  i++) {
//     console.log(i);
    
// }

// ==================================================
// 2-masala
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
    
// }

// ==================================================
// 3-masala
// 1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.
// for (let i = 1; i <= 100; i++) {
//     if(i%2==1){
//         console.log(i);
//     }
// }

// ==================================================
// 4-masala
// 1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// ==================================================
// 5-masala
// 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum += i;

// }
// console.log(sum);


// ==================================================
// 6-masala
// Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
// let num = +prompt("sonni kiriting")
// let k = 1;
//  for (let i = 1; i <= num; i++) {
//     k *= i
//  }
//  console.log(k);
 

// ==================================================
// 7-masala
// 1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.
// for (let i = 1; i <= 20; i++){
//     console.log(i**2);
    
// }

// ==================================================
// 8-masala
// Foydalanuvchi kiritgan sonning faktorialini hisoblang.
//  let num = +prompt("sonni kiriting");
//  let sum = 1;
//  for (let i = 0; i <= num; i++) {
//     sum *= i
//  }
// console.log(sum);

// ==================================================
// 9-masala
// 1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.
// for (let i = 1; i <= 100; i++){
//     if (i%5==0){
//         console.log(i);
//     }
// }

// ==================================================
// 10-masala
// Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.
// let num = +prompt("sonni kiriting");
// for (let i = 1; i <= num; i++){
//     if(i>0){
//         console.log(i**3);
//     }
// }

// ==================================================
// 11-masala
// 1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     if (i%2==0)
//         sum += i
// }
// console.log(sum);

// ==================================================
// 12-masala
// 1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.
// for (let i = 1;  i <= 50; i++){
//     if (i%3==0) {
//         console.log(i);
//     }
//     if(i==3*10)
//         break;
// }
// ==================================================
// 13-masala
// Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.
// let num = +prompt("sonni kiriting")
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if(num>0){

//     }
//         sum += i
// }
// console.log(sum);


// ==================================================
// 14-masala
// 1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.
// let sum = 0 ;
// for (let i = 1; i <= 10; i++){
//     console.log(i**2);
//     sum += i
    
// }
// console.log(sum);

// ==================================================
// 15-masala
//  Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.
// let num = +prompt("sonni kiriting");
// for (let i = 1; i <=num; i++){

// }

// 7.BARCHA MAVZULARNI QAMRAB OUVCHI MASALALAR

// ==================================================
// 1-masala
// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.
// let num = +prompt('sonni kiriting')
// let n = (num%3==0) ? console.log('bolinadi') :  console.log('bolinmaydi');
// for (let i = 1; i <=num; i++){
//     console.log(i);
// }


// ==================================================
// 2-masala
// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.
// let month = +prompt("OY raqamini kiriting");

// switch (month) {
//   case 1:
//     console.log("Qish");
//     break;
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//     console.log("Bahor");
//     break;
//   case 4:
//     console.log("Bahor");
//     break;
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//     console.log("Yoz");
//     break;
//   case 7:
//     console.log("Yoz");
//     break;
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//     console.log("Kuz");
//     break;
//   case 10:
//     console.log("Kuz");
//     break;
//   case 11:
//     console.log("Kuz");
//     break;
//   case 12:
//     console.log("Qish");
//     break;
//   default:
//     console.log("Bunday oy raqami mavjud emas");

//     break;
// }
// for (let i = 1; i<=month; i++){
//     console.log(i);
// }

// ==================================================
// 3-masala
// Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).
// let num = Math.trunc(Math.random() * 100)
// console.log(num)
// if (num % 2 == 0 ){
//     console.log('juft son ');
//     for (let i = 2;  i<= 20; i += 2 ) {
//         console.log(i);
//     }
// }else{
//     console.log('juft son emas');
// }


// ==================================================
// 4-masala
// Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).
// let num = +prompt("sonni kiriting")
// let sum = 1;
// for (let i = 1; i<= num; i++){
//     sum*=i
// }
// console.log(Math.abc(sum));


// ==================================================
// 5-masala
// Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

// let week = +prompt("hafta kunlarini kiriting");

// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("bunday hafta kuni mavjud emas");
//     break;
// }
// if (week%2==0){
// for (let i = 1; i <= 10;i++) {
//         console.log(i);
// }
// }

// ==================================================
// 6-masala
// Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).
// let num = Math.trunc(Math.random()*100)
// console.log(`tasodifiy son ${num}`)
// let sum = 0; 
// let i = 1;
// while (i<=num) {
//     i++
//     sum+=i
// }
// console.log(sum);


// ==================================================
// 7-masala
// Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.
// let num ;
// let sum = 0;
// let counter = 0;
// do {
//     num = +prompt("sonni kiriting");
//     if (num>=0){
//         sum+= num
//         counter ++
//     }
// }while (num>=0) {
//     console.log(sum/counter);
    
// }

// ==================================================
// 8-masala
// Foydalanuvchidan 1 dan 7 gacha son kiritishni so‘rang (switch-case). Agar son 3 yoki 6
