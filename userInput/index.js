let username;
let usernameConv = "Hello";

document.getElementById("btn").onclick = function () {
  username = document.getElementById("userID").value;
  console.log(username);
  document.getElementById("out").textContent = username;
};
