$(function(){
  // 뮤직 진행 애니메이션
  var mp = function(){
    $('.progressbar').animate({
      width: '100%'
    },10000, 'linear', function(){
      $('.btn_pause img').attr('src','img3/play_arrow-24px.svg')
    });
  }
  mp();
  //
    $('.btn_pause').click(function(){
      //play이면 stop, stop이면 play => if 이용
      if($('.progressbar').is(':animated')){
        $('.progressbar').stop();
        $('.btn_pause img').attr('src','img3/play_arrow-24px.svg')
      }else{
        mp();
        $('.btn_pause img').attr('src','img3/pause.svg')
      }
     
      if ($('.progressbar').css('width') == '240px') {
        $('.btn_pause img').attr('src','img3/play_arrow-24px.svg');
      }
    });
  
  
  });