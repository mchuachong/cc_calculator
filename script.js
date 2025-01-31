

const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const btn5 = document.getElementById("five");
const btn6 = document.getElementById("six");
const btn7 = document.getElementById("seven");
const btn8 = document.getElementById("eight");
const btn9 = document.getElementById("nine");
const btn0 = document.getElementById("zero");
const btnE = document.getElementById("equal");
const btnC = document.getElementById("clear");
const btnB = document.getElementById("back");
const btnP = document.getElementById("period");
const btnMu = document.getElementById("mult");
const btnD = document.getElementById("divide");
const btnA = document.getElementById("plus");
const btnMi = document.getElementById("minus");
const display = document.getElementById("display");
const preview = document.getElementById("preview");

let dispArr = [];
let prevArr = [];

const eval = () => {
    const termA = Number(prevArr.join(''));
    const operator = isNaN(dispArr[0])?String(dispArr.shift()):dispArr[0];
    const termB = Number(dispArr.join(''));
    /*console.log(operator)
    console.log(operator==='/')*/
    prevArr=String(Number(calc(termA,termB,operator).toPrecision(12))).split('');
    dispArr=[]
    update()
}
    

const calc = (a,b,o) => {
    switch (o) {
        case '+':
            return a+b
        case '-':
            return a-b
        case '/':
            return a/b
        case '*':
            return a*b
        default:
            return b
    }
}

    
const update = () => {
    display.textContent=dispArr.join("");
    preview.textContent=prevArr.join('');
    if(prevArr.length>13){
        preview.textContent = `${prevArr[0]}.${prevArr.splice(1,2).join("")}E${prevArr.length+1}`;
    }
    }
    

btn0.addEventListener("click",()=>{!isNaN(dispArr[0])||!isNaN(dispArr[1])?dispArr.push(0):null;update()});
btn1.addEventListener("click",()=>{dispArr.push(1);update()});
btn2.addEventListener("click",()=>{dispArr.push(2);update()});
btn3.addEventListener("click",()=>{dispArr.push(3);update()});
btn4.addEventListener("click",()=>{dispArr.push(4);update()});
btn5.addEventListener("click",()=>{dispArr.push(5);update()});
btn6.addEventListener("click",()=>{dispArr.push(6);update()});
btn7.addEventListener("click",()=>{dispArr.push(7);update()});
btn8.addEventListener("click",()=>{dispArr.push(8);update()});
btn9.addEventListener("click",()=>{dispArr.push(9);update()});
btnC.addEventListener("click",()=>{dispArr=[];prevArr=[];update()});
btnP.addEventListener("click",()=>{dispArr.includes(".")?null:dispArr.push('.');update()});
btnMu.addEventListener("click",()=>{prevArr.length===0?prevArr=dispArr:null;dispArr=['*'];update()});
btnD.addEventListener("click",()=>{prevArr.length===0?prevArr=dispArr:null;dispArr=['/'];update()});
btnA.addEventListener("click",()=>{prevArr.length===0?prevArr=dispArr:null;dispArr=['+'];update()});
btnMi.addEventListener("click",()=>{prevArr.length===0?prevArr=dispArr:null;isNaN(dispArr[0])&&dispArr[0]!='-'?dispArr[1]='-':dispArr=['-'];update()});
btnB.addEventListener("click",()=>{dispArr.pop();update()});
btnE.addEventListener("click",eval);


document.addEventListener("keydown",(e)=>{if(e.key==0){!isNaN(dispArr[0])||!isNaN(dispArr[1])?dispArr.push(0):null;update()}});
document.addEventListener("keydown",(e)=>{if(e.key==1){dispArr.push(1);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==2){dispArr.push(2);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==3){dispArr.push(3);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==4){dispArr.push(4);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==5){dispArr.push(5);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==6){dispArr.push(6);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==7){dispArr.push(7);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==8){dispArr.push(8);update()}});
document.addEventListener("keydown",(e)=>{if(e.key==9){dispArr.push(9);update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='Delete'){dispArr=[];prevArr=[];update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='.'){dispArr.includes(".")?null:dispArr.push('.');update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='*'){prevArr.length===0?prevArr=dispArr:null;dispArr=['*'];update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='/'){prevArr.length===0?prevArr=dispArr:null;dispArr=['/'];update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='+'){prevArr.length===0?prevArr=dispArr:null;dispArr=['+'];update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='-'){prevArr.length===0?prevArr=dispArr:null;isNaN(dispArr[0])&&dispArr[0]!='-'?dispArr[1]='-':dispArr=['-'];update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='Backspace'){dispArr.pop();update()}});
document.addEventListener("keydown",(e)=>{if(e.key=='Enter'){eval()}});