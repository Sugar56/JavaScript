// マウスクリック」イベントを設定する
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

// HTML要素がクリックされたときに、以下の2つのイベントが行われるように設定
// ・.box1がクリックされたとき、box1-extのclassを追加
// ・マウスアウトされたとき、box1-extのclassを削除

// 今回は、クリック後に複数のイベントが行われるようにしたいため、onを付けた以下の書き方で記述
// マウスクリックのイベントには、「.click()」もあります。clickの場合は、クリックされた時点でイベントが終わる。

// マウスクリックイベントの記述
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });
