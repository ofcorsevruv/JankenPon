let count = 0;
let submitNum = 0;

// document.getElementById("submit").onclick = function () {
//   submitNum = document.getElementById("whatCounter").value;
// };

// console.log(submitNum);

document.getElementById("generate").onclick = function () {
  count = Math.floor(Math.random() * 10);
  document.getElementById("Counter").textContent = count;
};
