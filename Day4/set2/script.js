// const res=document.querySelector('div');
// // const c=document.querySelector('p:nth-of-type(2)')
// const c=document.querySelector('p:nth-child(2)')
// // console.log(res);
// // div.innerHTML="<p>Hello</p>";
// // div[0].innerHTML="<p>Hello</p>";
// res.removeChild(c);

//--------------------------------------------------------------
// function getInfo(e){
//     // console.log("btn Clicked");
//     // const d=document.querySelector("div");
//     // const el=document.createElement()
//     // el.innerText="My Name is Shivani"
//     // d.prepend("My Name is Shivani");
// //     d.append("My Name is Shivani");
//     console.log(e);
//     // e.target.class='abc';
//     // // e.target.setAttribute('style','color:red')
//     // // e.target.setAttribute('style','background-color:green')
//     // e.target.style.color='red';
//     // e.target.style.backgroundColor ='sky';
// }
//--------------------------------------------------------
// const firstNameChange=(e)=>{
// // console.log(e.target.value);
// const val=e.target.value;
// if(val.length>3){
//     console.log('correct')
// }
// }

function submitForm(e){
    e.preventDefault();
    const t=e.target;
    const res={
        hobbies:[],
    };
    for(let i=0;i<t.length;i++){
        const ty= t[i].type;
        // const vl = t[i].value;
        // const nm = t[i].name;
        // console.log(nm,ty,vl);
        // if(ty=='checkbox'){
        //     console.log(t[i].checked)
        // }
        if(ty!='submit'){
            const vl = t[i].value;
        const nm = t[i].name;
           if(ty=='checkbox'&&t[i].checked){
            res.hobbies.push(vl);
           } 
           if(ty!='checkbox'){
            res[nm]=vl;
           } 
        }
        // console.log(t[i].value);
        // console.log(t[i].type);
    }
    // console.log(e.target.value);
    console.log(res);
}