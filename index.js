const BODY = document.querySelector("body");
const 된장찌개 = document.querySelector(".된장찌개")

const 된장찌개별 = 된장찌개.querySelector(".star-rating")

console.dir(된장찌개별)

function 알람주기(event) {
  console.dir(event.target)
  if (event.target) {
    // event.target.style.color = "red";
    event.target.style.color = "blue";
  } else {
    event.target.style.color = "red";
  }
}

된장찌개별.addEventListener("click", 알람주기);

