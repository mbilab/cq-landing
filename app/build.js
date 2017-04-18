import 'semantic-ui/dist/semantic.css'
import './build.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function(){
  $('.ui.massive.heart.rating').rating({
    initialRating: 1,
    maxRating: 5,
  })

  $('#add-btn').click(function(){
    $('#mission-list').append($('.mission').first().clone())
  })

  $('#submit-btn').click(function(){
    let mission = []
    $('.mission').each(function( index , el ){
      let m = {
        Mission_rating: $(el).find('.ui.rating').rating('get rating'),
        Mission_name: $(el).find('.mission_name').val(),
        Mission_content: $(el).find('.mission_content').val(),
      }
      mission.push(m)
    })
    const data = { gmail: $('.mail').val(), mission }
    console.log( data )
  })
})
