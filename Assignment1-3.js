Rectangle.prototype.getAreaForRect = function(width,height)  
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,3); 
myRect2.getAreaForRect(7,3);
myRect3.getAreaForRect(1,4);
myRect4.getAreaForRect(6,9);