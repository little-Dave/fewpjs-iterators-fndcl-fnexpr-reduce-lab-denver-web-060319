let answer = document.querySelector("#answer")
answer.innerText = "answer should show here"

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution herel;
// let totalBatteries = 0;

let totalBatteries = batteryBatches.reduce(function(total, batchNum){
  return (batchNum + total)
})
