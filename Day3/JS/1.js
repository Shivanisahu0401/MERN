// var message="Hello world";

// var age=18;
// age="done";
// console.log(message);
// -------------------------------------------------------
//loosely typed
//strictly typed
//statically typed  //search
//dynamically typed
// -----------------------------------------------------------
// console.log(message);
// var message="Hello world";
// console.log(message);
// message="else";
// console.log(message);
// ------------------------------------------------------------
// function env(){
//     console.log(message);
//     var message="Hello world";
//     console.log(message);
//     message="else";
//     console.log(message);
// }
// env();
// ----------------------------------------------------------
// function env(){
//     for(var i=0;i<5;i++){
//         console.log('--',i);
//     }
//     console.log(i);
// }
// env();
// -----------------------------------------------------------
// console.log(message);
// let message ="hello";

//------------------------------------------------------------
// const message;
// message="Hello";
// console.log(messsage);
//------------------------------------------------------------

//Data types
// let age=29;
// console.log(typeof(age));
// let name="shivani";
// console.log(typeof(name));

// let _='abcd';
// _='abbd';
// console.log(_);
// ------------------------------------------------------------

// let srr=['a','b','c'];
// srr[0]='abbd';
// console.log(srr);
// ------------------------------------------------------------

// let str="12";
// let age=20;
// let ans=age+str;
// console.log(ans);

//---------------------------------------------------------------

// let str='12';
// let age=20;
// let ans= age+(str*1);
// console.log(ans);

// let str='12';
// let p=parseInt(str);
// let n=Number(str);
// console.log(p,n);
// -------------------------------------------------------------
// let a='12';
// let b=12;
// if(a==b){
//     console.log('yess');
// }
// else{
//     console.log('no');
// }

// if(a===b){
//     console.log('yess');
// }
// else{
//     console.log('no');
// }

// let a=['a','b','c','d','e'];
// let cpy=[...a];
// if(a==cpy){
//     console.log('1.yess');
// }
// else{
//     console.log('1.no');
// }
// if(a===cpy){
//     console.log('1.yess');
// }
// else{
//     console.log('1.no');
// }
// ------------------------------------------------------------
// const str='khan';
// const usrName='my name is:';
// const ans=`${usrName} ${str}`;
// console.log(ans);
//------------------------------------------------------------
// function print(str='nothing is here'){
// console.log(str);
// }
// print();
// function print(str='nothing is here'){
// console.log(str);
// }
// print('hello');/
//-----------------------------------------------------------
// function sum(a,b){
//     console.log(a+b);
// }
// sum();
//-----------------------------------------------------------

// function sum(a,b){
//        console.log(a+b);
//      }
//     sum();
//     sum(2);
//     sum(2,3);

//------------------------------------------------------------
//functioon declaration
// function print(){
//     console.log('--');
// }
// //function assignment(anonymous)
// const a= function(){
//     console.log('--')
// }

// //function assignment(anonymous)
// const b= function(){
//     console.log('--')
// }
// //arrow function assignment
// const c= ()=>
// {
//     console.log('--')
// }
// print();
// a();
// b();
// c();
//-------------------------------------------------------

// let a=2;
// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
// }

//-----------------------------------------------------------
// const obj=new Object();
// obj[1]='one';
// obj[2]='two';
// obj[12]='twelve';
// console.log(obj);

// const obj={
// 1:'one',
// 2:'two',
// 12:'twelve',
// } ;
// console.log(obj);
//-------------------------------------------------------------------

const obj={
    'firstName':'ajay',
    'lastName':'singh',
    'age':20,
    'address':'delhi',
};
const x=prompt('pls tell the property to know');
console.log(obj[x]);