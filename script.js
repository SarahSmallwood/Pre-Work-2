const buttons = document.querySelectorAll("button");
const button_1 = buttons[0]
const button_2 = buttons[1]

const output = document.querySelector(".output");

console.log(button_1);
console.log(button_2);

const inputs = document.querySelectorAll("input");
const cost_1 = inputs[0]
const cost_2 = inputs[1]

button_1.addEventListener("click",function(){
    console.log(cost_1.value *0.15);
    let tip_1 = (cost_1.value *0.15).toFixed(2);
    let temp = `<h1>You should tip $${tip_1} on $${cost_1.value}</h1>`;
    output.innerHTML = temp;
})
button_2.addEventListener("click",function(){
    console.log(cost_2.value *0.2);
    let tip_2 = (cost_2.value *0.20).toFixed(2);
    let temp = `<h1>You should tip $${tip_2} on $${cost_2.value}</h1>`;
    output.innerHTML = temp;
})
