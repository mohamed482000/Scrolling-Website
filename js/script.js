var header = document.querySelector('header')
var stars = document.getElementById('stars')
var moon = document.getElementById('moon')
var fristMountain = document.getElementById('frist-mountain')
var secondMountain = document.getElementById('second-mountain')
var river = document.getElementById('river')
var boat = document.getElementById('boat')
var nouvil = document.querySelector('.nouvil')
window.onscroll = function () {
  var value = scrollY
  stars.style.left = value + 'px'
  moon.style.top = value * 4 + 'px'
  fristMountain.style.top = value * 2 + 'px'
  secondMountain.style.top = value * 1.5 + 'px'
  river.style.top = value + 'px'
  boat.style.top = value + 'px'
  boat.style.left = value * 3 + 'px'
  nouvil.style.fontSize = value + 'px'
  if (scrollY >= 67) {
    nouvil.style.fontSize = 67 + 'px'
    nouvil.style.position = 'fixed' + 'px'
    if (scrollY >= 415) {
      nouvil.style.display = 'none'
    } else {
      nouvil.style.display = 'block'
    }
    if (scrollY >= 127) {
      document.querySelector('.images-section').style.background =
        ' linear-gradient(  #376281 , #10001f)'
    } else {
      document.querySelector('.images-section').style.background =
        'linear-gradient(#200016 , #10001f)'
    }
    if (scrollY >= 391) {
      header.style.backgroundColor = ' #b8a0a0'
    } else {
      header.style.backgroundColor = ''
    }
  }
}
