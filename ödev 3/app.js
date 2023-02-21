

var deger=window.prompt("bir deger giriniz")



var deger2=window.prompt("bir deger giriniz")

var islem=window.prompt("ne olsun")


switch(islem){
 case "toplama":
alert(parseInt(deger)+parseInt(deger2))
console.log((deger) + (deger2))
break;

case "çıkarma":
console.log((deger)+(deger2))
alert(parseInt(deger)-parseInt(deger2))
break;

case "çarpma":
console.log((deger)*(deger2))
alert(parseInt(deger)*parseInt(deger2))
break;

case"bölme":
console.log((deger)+(deger2))
alert(parseInt(deger)/parseInt(deger2))
break;
}

