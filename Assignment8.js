function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1=new Person("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
Person2=new Person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jranalyst");
console.log(Person1);
console.log(Person2);

print=function()       
{
    console.log(Person1);
    console.log(Person2);
}();