
var zaman= new Date();
var saat = zaman.getHours();



if (saat>=8 && saat<12)
console.log('günaydın');

 
else if (saat>=12 && saat<16)
console.log('Tünaydın');

 
else if (saat>=16 && saat<22)
console.log('İyi Akşamlar');

 
else if (saat>=22 && saat<00)
    console.log('İyi Geceler');


else if (saat>=00 && saat<8)
console.log('Uyu');


