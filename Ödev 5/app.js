alert( "Merhaba :)");

 var deger=window.prompt("bir deger giriniz")
console.log(deger)
var deger2=window.prompt("bir deger giriniz")
console.log(deger)
var deger3=window.prompt("bir deger giriniz")
console.log(deger)


if((deger===deger2)&&(deger3===deger2)) {

    alert("Eşkenar üçgen")}

else if(deger==deger2){
    alert("İkizkenar üçgen")
}

else if(deger==deger3){
    alert("ikizkenar üçgen")
}
else if(deger2==deger3){
    alert("ikizkenar üçgen")
}


else{
    alert("Çeşitkenar üçgen")
}