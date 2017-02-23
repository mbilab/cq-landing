import 'semantic-ui/dist/semantic.css'
import './style.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  $('#app').click(function() {
    window.open('https://www.youtube.com/watch?v=4_mTpRvTuSU')
  })
  $('#google').click(function() {
    window.open('https://www.youtube.com/watch?v=YgSx03vOU1I')
  })
  $('#tartew-btn').click(function() {
    window.open('https://www.youtube.com/watch?v=T4SimnaiktU')
  })

  $('body').css('background-image','url('+require('./res/cq-res/home/background.png')+')')
  $('#title').css('background-image','url('+require('./res/cq-res/main/logo-vertical.png')+')')
  $('#iphone').css('background-image','url('+require('./res/cq-res/home/iphone.png')+')')
  $('#app').css('background-image','url('+require('./res/cq-res/home/app.png')+')')
  $('#google').css('background-image','url('+require('./res/cq-res/home/google.png')+')')

  $('#content-top-bg').css('background-image','url('+require('./res/cq-res/public_use/content-top-bg.png')+')')
  $('#content-mid-bg').css('background-image','url('+require('./res/cq-res/public_use/content-bg.png')+')')
  $('#content-bottom-bg').css('background-image','url('+require('./res/cq-res/public_use/content-bottom-bg.png')+')')
})
