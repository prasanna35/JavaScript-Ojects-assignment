var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is: " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(1,3); 
var myRect2 = new Rectangle(1,5);
var myRect3 = new Rectangle(6,7);
var myRect4 = new Rectangle(4,5);

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
myRect1.getAreaForRect(4,3); 
myRect2.getAreaForRect(6,7);
myRect3.getAreaForRect(5,3);
myRect4.getAreaForRect(2,3);
