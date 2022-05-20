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
Deepika = new Person("Deepika","singh",99,['java','c#'],"01/01/1969",{city:"Bangalore",pincode:67856},"false","AnalystA4");
Jyothi = new Person("Jyothi",55,["html","css"],"05/06/1975","false","JrAnalyst");
Arjun = new Person("Arjun",10,"01/01/2005","false","film");

var Jyothi = Object.create(Deepika); 
var Arjun = Object.create(Jyothi);  

print = function()
{
    console.log(Deepika);
    console.log(Jyothi.lastName);
    console.log(Jyothi.address);
    console.log(Arjun.lastName);
    console.log(Arjun.skills);
    console.log(Arjun.address);
    console.log(Arjun.firstName);
}();
