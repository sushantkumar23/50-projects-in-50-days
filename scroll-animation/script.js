var boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
  console.log(window.innerHeight)
  const triggerPoint = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    console.log(boxTop)
    if (boxTop < triggerPoint) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
