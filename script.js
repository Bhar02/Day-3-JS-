// function fun()
// {
// var message= 'hello world';
// var age=18;
// age="done";

// console.log('hello');
// console.log(message);
// console.log(age);
// for(var i=0;i<5;i++){
// console.log('---',i);
// }
// console.log(i);
// }
// fun(); // fucntion calling

// let message='fun';
// console.log(message);

// const id=45;
// id='else';
// console.log(id);


// let userAge=2;  //camel case
// console.log(typeof(userAge)); 
// age='else';
// console.log(typeof(age));
// let a=['a','b'];
// a[0]='abc';
// console.log(a);

// let str = '12';
// let age = 20;

// let ans = age-(-str); // addition doesn't work, so we use subtration
// console.log(ans);  //string concatination

//type checking
//  let a='12';
//  let b=12;
// if(a==b)   //used for only value
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

// if(a===b)   //used to check both the data type and value
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
// let a = ["a", "b", "c", "d"];
// let cpy = [...a];
// console.log(cpy);

// !=  
// !==
// const str='bhargavi';
// const ame='My name is: ';
// const ans= `${ame} ${str}`;
// console.log(ans);

var p = '1';
var q = '2';
sum(p,q);
function sum (p, q) 
{
    if (p && q)
        console.log("True");
    else
        console.log ("False");
}