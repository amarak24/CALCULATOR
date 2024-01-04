const input = document.getElementById("input");
const button = document.querySelectorAll("button");

let string = "";
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "D") {
      string = string.substr(0, string.length - 1);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
