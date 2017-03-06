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
  $('#start-btn').click(function() {
    window.open('https://www.youtube.com/watch?v=T4SimnaiktU')
  })
})
