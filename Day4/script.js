// let a=new String("Hello");
// let b="Hello";
// if(a==b){
//     console.log("Yess");
// }
// else{
//     console.log("No");
// }
//----------------------------------------------------------------------------------------------------------------------------------

//05 April 2024

// const obj={
//     name:'Ajay',
//     lastname:'singh',
// }
// console.log(obj);
// document.write(obj);

// const obj = {
    
//         "name":"Ajay",
//         "lastname":"singh"
//     }
//     const str=JSON.stringify(obj);
//     document.write(str);

//cannot reassign const objects 
// const obj = {
//     "name":"Ajay",
//           "lastname":"singh"
//          }
// console.log(obj);
//Array:
// let arr=[1,2,3,4];
// // arr[2,3,4];
// // arr[1]=34;
// // arr.push(10); //array methods
// console.log(typeof(arr));
//--------------------------------------------
// const arr=[1,2,34];
// const obj = {
//          "name":"Ajay",
//                "lastname":"singh"
//               }
// // arr[2]=4;
// // console.log(arr);
// // console.log(typeof(arr));
// // console.log(typeof(obj));
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));

//checkIfObject{[1,2,3,4]}
//checkIfObject({}"name":"age")
// function checkIfObject(x){
// if(Array.isArray(x)){
//     console.log("Not Object");
// }
// else if(typepf(x)=="object"){
//     console.log(" Object");
// }
// else{
//     console.log("Not Object");
// }
// }
// checkIfObject([]);
//--------------------------------------------------------------
// const arr=['name',2];
// const obj={
//     'name':"Ajay",age:20,1:'else'
// }

// for(let i=0;i<2;i++){
//     console.log(obj[i]);
// }
// for(let i of arr){
//     console.log(i);
// }
// for(let i of obj){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(i);
// }
// for(let i in obj){
//     console.log(i);
// }
//-----------------------------------------------------------------
// window.console.log(window)
// window.console.log(innerHeight)
// window.console.log(innerWidth)
// console.log(window.document)
// console.log(window)
// console.log(window.document)
// console.dir(window.document)
// console.dir(window)
// console.log(console)

// const res=document.getElementsByTagName('h3')
// console.log(res)

// const res=document.getElementById('ht1')
// console.log(res)
// const res=document.getElementById('p1')
// console.log(res)
// const res=document.querySelectorAll('p#p1')
// console.log(res)
//------------------------------------------------------------
// const res=document.getElementsByTagName("div");
// // // res.innerText="hello";
// // res[0].tagName="h1"
// s[0].setAttribute('tagName','h1')
// console.log(res)
//-------------------------------------------------------------

// const ne=document.createElement("h3");
// // console.log(ne);
// ne.innerText="Dynamic Text"
// // console.log(ne);
// document.body.appendChild(ne);

// const ne=document.createElement("h3");
// // 
// ne[i].remove()

//-------------------------------------------------------------
