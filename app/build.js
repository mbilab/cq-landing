import 'semantic-ui/dist/semantic.css'
import './build.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  $('.ui.massive.heart.rating').rating({
    initialRating: 1,
    maxRating: 5,
  })
})
