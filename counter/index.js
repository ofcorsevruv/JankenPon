let scoreCount = 0;

document.getElementById("decBtn").onclick = function () {
  scoreCount--;
  document.getElementById("counterID").textContent = scoreCount;
};

document.getElementById("incBtn").onclick = function () {
  scoreCount++;
  document.getElementById("counterID").textContent = scoreCount;
};

document.getElementById("resBtn").onclick = function () {
  scoreCount = 0;
  document.getElementById("counterID").textContent = scoreCount;
};
