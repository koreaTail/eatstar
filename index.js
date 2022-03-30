const BODY = document.querySelector("body")
const foods = document.querySelector(".food")

foods.addEventListener("click", 클릭시함수)

function 클릭시함수(e){

  console.log(e.target.children[0].classList.value == 'good')
  if(e.target.classList.value == 'foodScore'){
    e.target.children[0].children[0].style.fontSize ="40px"
  }
}


