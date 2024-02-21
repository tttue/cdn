/**
 * Created by Nhokchien on 1/22/2017.
 */
$(document).ready(function () {
  $('.online_block_title').click(function () {
    $(this).parents('.online_block').toggleClass('open')
  })
  $('.tue_online_block_title').click(function () {
    $(this).parents('.tue_online_block').toggleClass('open')
  })
})
