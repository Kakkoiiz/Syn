const arrowIcons = document.querySelectorAll('.control i');

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    console.log(icon)
  })
})