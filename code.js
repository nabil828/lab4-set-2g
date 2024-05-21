



const cards = document.querySelectorAll(".card")
let firstImg = undefined
let secondImg = undefined

const onCardClick = function (e) {
  if (!firstImg)
    firstImg = this.querySelector("img")
  else
    secondImg = this.querySelector("img")

  this.classList.toggle("flip")

  if (firstImg && secondImg)
    if (firstImg.src == secondImg.src) {
      firstImg.parentNode.removeEventListener("click", onCardClick)
      secondImg.parentNode.removeEventListener("click", onCardClick)
      console.log("match");
    }
    else {
      setTimeout((arg) => {
        firstImg.parentNode.classList.toggle("flip")
        secondImg.parentNode.classList.toggle("flip")
      }, 1000)
      console.log("no match");
    }
}

cards.forEach((arg) => {
  arg.addEventListener("click", onCardClick)
})