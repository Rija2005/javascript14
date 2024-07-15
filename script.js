//WHILE LOOP;;while or for loop both are sm..but there written style are different 
// let n =+prompt("Enter the value of n")
// let i = 0;
// while(i<=n){
//     document.write(i)
//     i++;
// }

// for(i=0; i>10; i++){
//     console.log(i);
// }



// //while loop question
//  //write a program to display sum of numbers from 1 to 100.
//  let sum = 0;
//  let num = 1;
//  while (num<=100){//1<=100
//     sum+=num;//sum= sum+num// 0+1 =1,3,6,10,15
//     num++
//  }
//  document.write("sum of 1 to 100:" + sum)


// //WRITE A PROGRAM TO DISPLAY FACTORIAL  OF A NUMBER
// let number =4;
// let factorial =1;
// while (number>0){//condition run when the value less than 0
//     factorial= factorial*number;//4, 12,24
//     number--;//(1)then (0 = 0)
// }
// document.write("factorial of a number is:"+ factorial)//n give thiss statement


// //write aprogram to display finding the first 10 even number
// let evenNumber =[]
// let i=1;
// while(evenNumber.length<10){
//     if (i%2===0){
//         evenNumber.push(i)
//     }
//     i++
// }
// document.write("the first 10 even number"+ evenNumber)

// //write a program to display your input validation.

// let userInput;
// let password = "javascript123";
// while(userInput!==password){
//     userInput = prompt("Enter your password")
// }
// document.write("access granted")


//write a program to generating countdown.

let countdown = 10;
while (countdown >0 ){
    document.write("<br>" , countdown)
     countdown--
}

document.write("<br>"+  " <h1>Happy New Year</h1>")
  
//do while loop is same as while loop but writing structure is different

let n =+prompt("Enter the value of n")
let i = 0;
do{
    document.write(i)
    i++;
}
while(i<=n)



let  a = 0;
 do {
 alert(a);
 i++;
 } while (a < 0);



 let sum = 0;
  let num = 1;
 do{//1<=100
     sum+=num;//sum= sum+num// 0+1 =1,3,6,10,15
     num++
  }
  while (num<=100)
  document.write("sum of 1 to 100:" + sum)

  let number =4;
  let factorial =1;
do{//condition run when the value less than 0
      factorial= factorial*number;//4, 12,24
      number--;//(1)then (0 = 0)
  }
  while (number>0)
  document.write("factorial of a number is:"+ factorial)//n give thiss statement