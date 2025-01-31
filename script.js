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

let dispArr = [1,2,3,4,5];
let prevArr = [1,2,2,2];



btn0.addEventListener("click",()=>{dispArr.push(0);update()});
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
btnP.addEventListener("click",()=>{dispArr.includes("x")?null:dispArr.push('x');update()});
btnP.addEventListener("click",()=>{dispArr.includes("/")?null:dispArr.push('/');update()});
btnP.addEventListener("click",()=>{dispArr.includes("-")?null:dispArr.push('-');update()});
btnP.addEventListener("click",()=>{dispArr.includes("+")?null:dispArr.push('+');update()});



const update = () => {
    display.textContent=dispArr.join("");
    preview.textContent=dispArr.join('');
    console.log(dispArr)
}

update();