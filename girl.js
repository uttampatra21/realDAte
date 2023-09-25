const girlSec = document.querySelector("#girls");
const x = document.querySelector(".x");

const girl1 = () => {
  document.querySelector(".girl-sec").style.visibility = "visible";
  console.log("hi");
};

x.addEventListener("click", () => {
  document.querySelector(".girl-sec").style.visibility = "hidden";
});
