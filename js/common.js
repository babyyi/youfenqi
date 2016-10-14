/**
 * Created by Administrator on 2016/9/11.
 */
/*5.移动端滑动手势效果*/
var startX = 0, moveX = 0 , distanceX = 0 , isMove = false;
$('.carousel').on('touchstart',function(e){
    /*返回的event对象是封装过后的  通过originalEvent可以找到原生事件*/
    startX = e.originalEvent.touches[0].clientX;
}).on('touchmove',function(e){
    moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX - startX;
    isMove = true;
}).on('touchend',function(e) {
    console.log(distanceX);
    /*滑动超过50px的时候才认作是滑动*/
    /*左滑动  下一张*/
    /*右滑动  上一张*/
    /*滑动了*/
    if (isMove && Math.abs(distanceX) > 50) {
        if (distanceX > 0) {
            /*右滑动  上一张  ?*/
            $('.carousel').carousel('prev');
        } else {
            /*左滑动  下一张  ?*/
            $('.carousel').carousel('next');
        }
    }
})