/**
 * Created by Administrator on 2017/10/9.
 */
var r_top = function(tid,t_timer){
    var Top = document.getElementById(tid);
    $(Top).click(function(){
        $('html,body').animate({'scrollTop':0},t_timer);
    });
    $(window).scroll(function () {
        var winHeight = $(document).scrollTop();
        var scrollY = $(document).scrollTop();
        if( scrollY > 10){
            $(Top).show(t_timer);
        }else {
            $(Top).hide(t_timer);
        }
    });
};

