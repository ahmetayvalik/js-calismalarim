var islem=window.prompt("bir üçgen seçiniz")
console.log(islem)


switch(islem){
case"ikizkenar":

var  deger=window.prompt("bir deger giriniz")
 var deger2=window.prompt("bir deger giriniz")
    


 break;

case"eşkenar":

var deger=window.prompt("bir deger giriniz")
alert(parseInt(deger)*parseInt(deger)*( Math.sqrt(3))/parseInt("4"))
break;

case"çeşitkenar":
var deger=window.prompt("bir deger giriniz")
var deger2=window.prompt("bir deger giriniz")
var deger3=window.prompt("bir deger giriniz")


alert(parseInt(deger)+parseInt(deger2)+parseInt(deger3))

break;
}