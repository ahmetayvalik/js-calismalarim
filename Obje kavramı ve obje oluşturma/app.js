let value;

const programmer={
name:"Ahmet Ayvalık",
age:16,
email:"ahmetayvalik@gmail.com",
langs:["python,javascript"],
address:{
    city:"izmir",
    street:"Gazi mah.",
},

work :function(){
    console.log("Yazılım Çalışıyorum...");
}

}
value=programmer;

value=programmer.address.city
console.log(value);