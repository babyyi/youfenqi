/**
 * Created by Administrator on 2016/9/11.
 */
/*5.�ƶ��˻�������Ч��*/
var startX = 0, moveX = 0 , distanceX = 0 , isMove = false;
$('.carousel').on('touchstart',function(e){
    /*���ص�event�����Ƿ�װ�����  ͨ��originalEvent�����ҵ�ԭ���¼�*/
    startX = e.originalEvent.touches[0].clientX;
}).on('touchmove',function(e){
    moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX - startX;
    isMove = true;
}).on('touchend',function(e) {
    console.log(distanceX);
    /*��������50px��ʱ��������ǻ���*/
    /*�󻬶�  ��һ��*/
    /*�һ���  ��һ��*/
    /*������*/
    if (isMove && Math.abs(distanceX) > 50) {
        if (distanceX > 0) {
            /*�һ���  ��һ��  ?*/
            $('.carousel').carousel('prev');
        } else {
            /*�󻬶�  ��һ��  ?*/
            $('.carousel').carousel('next');
        }
    }
})