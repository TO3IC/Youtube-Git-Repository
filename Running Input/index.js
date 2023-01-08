var NameInput = document.querySelector(".name");
var Submit = document.querySelector(".submit");
var correct = false;
var count = 0;

NameInput.addEventListener("input", () => {
  if (NameInput.value.toLowerCase() !== "john") {
    correct = false;
    Submit.setAttribute("type", "button");
    Submit.innerHTML = "You didn't Write John right >:(";
  } else {
    correct = true;
    Submit.innerHTML = "Submit";
    Submit.style.translate = "0px 0";
    Submit.setAttribute("type", "submit");
  }
});

Submit.onmouseover = () => {
  if (correct != true && count === 0) {
    count = 1;
    Submit.style.translate = `250px 0`;

    console.log("wrong");
  } else if (correct != true && count === 1) {
    count = 0;
    Submit.style.translate = "0px 0";
    console.log("wrong");
  } else {
    console.log("right");
  }
};
