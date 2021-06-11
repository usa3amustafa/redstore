const menuBtn = document.getElementById('menu_bars')
const menuItems = document.getElementById('menu_items')

menuItems.style.maxHeight = '0px'

menuBtn.addEventListener('click', menuToggle)

function menuToggle() {
  if (menuItems.style.maxHeight == '0px') {
    menuItems.style.maxHeight = '200px'
  } else {
    menuItems.style.maxHeight = '0px'
  }
}
