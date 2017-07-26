import 'semantic-ui/dist/semantic.css'
import './build.sass'

const io = require('socket.io-client')
window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function(){

  const socket = io('luffy.ee.ncku.edu.tw:8034')

  $('.ui.massive.heart.rating').rating({
    initialRating: 1,
    maxRating: 5,
  })

  let numOfClick = 1
  $('#add-btn').click(function(){
    numOfClick = numOfClick + 1
    if(numOfClick < 5)
    {
      let cloneMission = $('.mission.hide').clone().removeClass('hide')
      $('#mission-list').append($(cloneMission))
      $(cloneMission).find('.ui.rating').rating({
        initialRating: 1,
        maxRating: 5,
      })
    }
    else
    {
      $('#alert').modal('show')
    }
  })

  $('#mission-list').on('click', '.remove-btn', function(event){
    if(numOfClick == 1)
    {
      $('#warning').modal('show')
    }
    else
    {
      numOfClick = numOfClick -1
      $(event.currentTarget).parent().parent().remove()
    }
  })

  let p = null
  $('#mission-list').on('click', '.avatar', function(event){
    p = event.currentTarget
    $('.ui.modal').modal('show')
  })

  $('.modal img').click(function(event) {
    $(p).css('background-image',`url('${$(event.currentTarget).attr('src')}')`)
    $('.ui.modal').modal('hide')
  })

  $('#submit-btn').click(function(){
    let mission = []
    $('.mission').not('.hide').each(function( index , el ){
      let m = {
        avatar: $(el).find('.avatar').css('background-image').match(/[a-z0-9]+\.svg/),
        Mission_rating: $(el).find('.ui.rating').rating('get rating'),
        Mission_name: $(el).find('.mission_name').val(),
        Mission_content: $(el).find('.mission_content').val(),
      }
      mission.push(m)
    })
    const data = { courseName: $('#courseName').val(), password: $('#password').val(), mission }
    socket.emit('data' ,data)

    socket.on('get-id', function(data){
      console.log(data)
    })
  })
})
