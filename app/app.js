import 'semantic-ui/dist/semantic.css'
import './app.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  $('.android.icon').click(function() {
    window.open('https://play.google.com/store/apps/details?id=com.mbilab.cq')
  })
  $('.apple.icon').click(function() {
    window.open('https://www.youtube.com/watch?v=YgSx03vOU1I')
  })
  $('#start-btn').click(function() {
    window.open('https://www.youtube.com/watch?v=T4SimnaiktU')
  })
  wdth=$(window).width()
  $(window).resize(function() {
   })
})
