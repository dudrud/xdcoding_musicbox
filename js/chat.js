$(function(){
  //add 버튼 클릭시, 친구보이게, 버튼회번
  $('.btn-add').on('click',function(){
    $('#add ul').fadeToggle();
    $('.btn-add img').toggleClass('ro');
  })

});
