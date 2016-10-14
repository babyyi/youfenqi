/**
 * Created by Administrator on 2016/9/11.
 */
$(function(){
    var $dot=document.querySelector('#unav_dot');
    var $unav_top=document.querySelector(".unav_top ");
    var $goToBtn=$("#goToBtn");

    $($dot).click(function(){
        if($(".none").css("display")==="none"){
            $($unav_top).show();
        }else{
            $($unav_top).hide();
        }
    })
    //console.log($ufist);
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $goToBtn.show();

        }else{
            $goToBtn.hide();
        }
          $goToBtn.click(function(){
              $(window).scrollTop(0);
        })
    })
    $('.app_close').click(function(){
        $('.app_wrap').hide();
    })
})