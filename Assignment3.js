var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is: " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(2,4); 
var myRect2 = new Rectangle(8,2);
var myRect3 = new Rectangle(2,6);
var myRect4 = new Rectangle(5,4);

console.log(myRect1.width);
console.log(myRect1.height);
myRect1.area();
console.log("\n");
console.log(myRect2.width); 
console.log(myRect2.height);
myRect2.area();
console.log("\n")
console.log(myRect3.width); 
console.log(myRect3.height);
myRect3.area();
console.log("\n")
console.log(myRect4.width);
console.log(myRect4.height);
myRect4.area();
console.log("\n")





Rectangle.prototype.getArea = function()
{
    console.log(" Area  : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();



Rectangle.prototype.getAreaForRect = function(width,height)  
{
    console.log("Area  : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(2,3); 
myRect2.getAreaForRect(8,6);
myRect3.getAreaForRect(5,3);
myRect4.getAreaForRect(1,6);
