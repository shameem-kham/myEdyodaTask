

// // Write a program to search if a number exists in an array. If the number exists then return the position.
var arr = [2,3,4,5,6,7,6,5,4,3,33,33,2,2]
var userInput = prompt("enter your number");
var emptyArr=[];

for(var i=0;i<arr.length;i++){
    if(arr[i] == userInput){
     emptyArr.push(i);
    }
   }

   if(emptyArr.length==1){
     console.log(emptyArr[""])
   }
   else if(emptyArr.length>1){
        console.log(emptyArr)
   }else{
     console.log(-1);
   }