$(function(){
  $('.btn-menu').click(function(){
    $('#gnb').slideToggle();
  });
  //뒤로 버튼 클릭시 뒤로 가기
  $('.btn-back').on('click',function(){
    history.back();
  });
});