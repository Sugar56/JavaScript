// jQueryで「マウスオーバー」イベントを設定する
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  // 「マウスアウト」イベントを追加する記述
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});

// イベントとは、ブラウザ上でユーザーが実行する動作のこと
// （例）「クリック」する「マウスを移動する」など

// イベントの記述
// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// マウスオーバー（mouseover）とは、HTML要素上にマウスカーソルが重なっている状態、イベントの1つ。
