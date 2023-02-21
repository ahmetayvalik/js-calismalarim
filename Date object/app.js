let value;

const now=new Date();//Şu anki zamanı almamızı sağlar
const date1=new Date("12-17-2004 09:15:15");
value=date1;

value=date1.getMonth();
value=date1.getDate();

date1.setMonth(7);
date1.setDate(6);
date1.setFullYear(2000)
value=date1

console.log(value);