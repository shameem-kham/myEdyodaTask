let x  = prompt("enter x value ");
let y  = prompt("enter y value ");
let z  = prompt("enter z value ");
let result;

if(x==y && y==z){
     result = "triangle is equilateral";
     console.log(result)
}
else if(x==y || y==z || x==z) {
     result = "triangle is isosceles";
     console.log(result)
    }

else{
    result = "Scalene";
    console.log(result);
}


document.getElementById("demo3").innerHTML="The Final Result of :" + result;