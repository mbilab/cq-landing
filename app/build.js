import 'semantic-ui/dist/semantic.css'
import './build.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  $('.ui.massive.heart.rating').rating({
    initialRating: 1,
    maxRating: 5,
  })
  $('#submit-btn').click(function(){
    let a = {
      Gmail: $('.mail').val(),
      Mission_content: $('.Mission_content').val(),
      Mission_name: $('.Mission_name').val(),
    }
    console.log(a)
  })
  $('#add-btn').click(function(){
    $('.mission').clone().appendTo('.content')
  })
})
