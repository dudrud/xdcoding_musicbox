$(function(){
  //button share 클릭하면 list애니메이션주기
  $('.btn-share').click(function(){
    $('#friend-list').animate({'left':'0px'});
  });
  $('.close').click(function(){
    $('#friend-list').animate({'left':'100%'});
  });
  //
  $('.modal').click(function(e){
if(e.target.className!='modal'){

}else{
  $('#friend-list').animate({left:'100%'});
}
  });
  //공유기능 중 fr-ul을 공통으로 사용하기 위해 load()
  $('#fr-ul').load('fr-ul.html');
});