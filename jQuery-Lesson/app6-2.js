// class属性を追加する/解除する
// マウスオーバーすると.box1-extのclassが追加され、マウスアウトすると.box1-extのclassが外れるという記述
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

// class属性の切り替えに使われているのが、「addClass()」と「removeClass()」
// addClass()で、対象のHTML要素にclass属性を追加
// removeClass()で、要素に設定されているclass属性が解除

// app6-1の記述だと、すべてのCSSを書かなければならず、手間がかかってしまう。
// マウスオーバー時のCSS（class）をあらかじめ定義しておき、マウスカーソルの状況に応じて、そのCSSを追加（または解除）するように設定を行う。
