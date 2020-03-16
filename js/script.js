$(function() {
    setTimeout(function(){
    $('.start p').fadeIn(1600);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.start').fadeOut(500);
    },2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
  // アコーディオン
  $('.school').click(function() {
      var $answer = $(this).find('.detasills');
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();
  
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find("span").text("+");
  
      } else {
        $answer.addClass('open');
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();
  
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find("span").text("-");
      }
    });
  });
  
  $(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        pause: 5000,
    });
  });