import 'semantic-ui/dist/semantic.css'
import './style.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  $('#getapp > img:first-child').click(function() {
    window.open('https://www.youtube.com/watch?v=4_mTpRvTuSU')
  })
  $('#getapp > img:nth-child(2)').click(function() {
    window.open('https://www.youtube.com/watch?v=4_mTpRvTuSU')
  })
})

