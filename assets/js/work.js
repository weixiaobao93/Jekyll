/**
 * Created by wxb on 2017/10/9.
 */
function navSF(ClassName,Ochild,Tchild,time) {
    var obj_ClassName = document.getElementsByClassName(ClassName);
    $(function () {
        $(obj_ClassName).height(document.body.scrollHeight);
        $(obj_ClassName).children(Tchild).hide();
    })
    $(obj_ClassName).children(Ochild).bind('click',function () {
        $(this).css({background:'#bdd2d2'}).siblings(Ochild).css({background:'#e7e7e7'});
        $(this).next(Tchild).slideToggle(time).siblings(Tchild).slideUp(time);
    });
}
function rTop(tid,t_timer){
    var obj_Top = document.getElementById(tid);
    $(obj_Top).click(function(){
        $('html,body').animate({'scrollTop':0},t_timer);
    });
    $(window).scroll(function () {
        var winHeight = $(document).scrollTop();
        var scrollY = $(document).scrollTop();
        if( scrollY > 10){
            $(obj_Top).show(t_timer);
        }else {
            $(obj_Top).hide(t_timer);
        }
    });
};

