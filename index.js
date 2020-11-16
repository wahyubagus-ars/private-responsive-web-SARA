const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  if (toggle && nav) {
     toggle.addEventListener('click', () => {
       nav.classList.toggle('show')
     })
  }
}

showMenu('nav-toggle', 'nav-menu')

// Remove menu Mobile
const navLink = document.querySelectorAll('.nav__link')
function linkActive() {
  //Active Link
  navLink.forEach(e => e.classList.remove('active'))
  this.classList.add('active')

  // remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(e => e.addEventListener('click', linkActive))