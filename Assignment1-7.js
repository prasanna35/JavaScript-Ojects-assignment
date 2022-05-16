const myString = '{"firstName":"Rohit",  "lastName":"Kujur"}';
const ob = JSON.parse(myString);
ob.firstName = eval("(" +ob.firstName+")");
