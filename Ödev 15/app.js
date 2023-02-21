  var deger=window.prompt("Ana parayı giriniz")
//************************
//Faiz oaranı = yüzde 15
//************************


// function carpma(x){
// return(x*"1.32"*"12")
// }

// function b(x){
//     return(x/"1200")
// }

// let a =b(deger);

// a = carpma (a);
 
//  alert(parseInt(a)+parseInt(deger))




var sonuc=0;
var toplam=deger;
for (let i =0; i<12 ; i += 1) {
sonuc +=parseFloat(deger/100)*15
toplam+=sonuc  
}

console.log(sonuc);



// var sonuc=0;
// for(let i=4;  ;i+=2){
//    sonuc += i;
//    break;
 
// }
//  console.log(sonuc)
