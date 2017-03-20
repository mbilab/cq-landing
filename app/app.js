import 'semantic-ui/dist/semantic.css'
import './app.sass'

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function() {
  const w = 1280
  const h = 720
  const unit = 14
  // $(window).resize(function(){
  //   let areaRatio = ($(window).width()) * ($(window).height()) / (w * h)
  //   console.log(`${w},${h},${areaRatio}`)
  //   console.log(unit * areaRatio)
  //   $('body').css('font-size', `${unit * areaRatio}px`)
  // })
  $('.android.icon').click(function() {
    window.open('https://play.google.com/store/apps/details?id=com.mbilab.cq')
  })
  $('.apple.icon').click(function() {
    window.open('https://www.youtube.com/watch?v=YgSx03vOU1I')
  })
  $('#start-btn').click(function() {
    window.open('https://www.youtube.com/watch?v=T4SimnaiktU')
  })
})
