/**
 * Created by Administrator on 2017/10/9.
 */
var casa = document.getElementsByClassName('category-sample');
$(function () {
  $(casa).height(document.body.scrollHeight);
         $(casa).children('ul').hide();
  })
  $(casa).children('div').bind('click',function(){
        $(this).next('ul').slideToggle(300).siblings("ul").slideUp(300)
  })


