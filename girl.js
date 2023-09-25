const girlSec = document.querySelector("#girls");
const x = document.querySelector(".x");
x.addEventListener("click", () => {
  document.querySelector(".girl-sec").style.visibility = "hidden";
});

const girl1 = () => {
  document.querySelector(".girl-sec").style.visibility = "visible";
  document.querySelector("#changeGirl").src =
    "/images/section1/WhatsApp Image 2023-09-25 at 12.33.34.jpeg";
};

const girl2 = () => {
  document.querySelector(".girl-sec").style.visibility = "visible";
  document.querySelector("#changeGirl").src =
    "/images/section1/WhatsApp Image 2023-09-25 at 12.33.35 (1).jpeg";
};

const girl3 = () => {
  document.querySelector(".girl-sec").style.visibility = "visible";
  document.querySelector("#changeGirl").src =
    "http://127.0.0.1:5500/images/section2/WhatsApp%20Image%202023-09-25%20at%2012.33.50.jpeg";
};
