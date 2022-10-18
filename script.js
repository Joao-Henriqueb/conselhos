let text=document.querySelector(".text");
let num=document.querySelector(".num");
let btn=document.querySelector(".imgg");
const apiLink="https://api.adviceslip.com/advice";


const TrataApi= async()=>{
    const response=await fetch(apiLink)
    const advice=await response.json()
    return advice
   
}
const renderizarconselho=(adviceObj)=>{
    const{id,advice}=adviceObj;
    num.textContent=`ADVICE# ${id}`
    text.textContent=advice;

}


const novoconselho=async ()=>{
    const data=  await TrataApi()
    const advice= data.slip;
    renderizarconselho(advice)
    
}
btn.addEventListener("click",novoconselho)











