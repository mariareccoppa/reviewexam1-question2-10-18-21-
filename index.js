let m = parseInt(prompt("Enter a number"))
let isWeekend = confirm("isWeekend");
let mNumber = m = (m%5 ===0)
let answer = mNumber ==true && !isWeekend || mNumber ==false && isWeekend
console.log(answer)