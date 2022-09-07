$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// HTMLの読み込みが終わってからjQueryが実行されるように記述するため、
// 以下の様に記述

// $(document).ready(function () {
//   // jQueryプログラムの内容
// });

// 省略形（頻繁に使うコードのため用意されている）

// $(function(){
//   // jQueryプログラムの内容
// });

// jQueryの基本書式（上記の記述の2行目のところ）
// $( セレクタ ).メソッド ( パラメータ );

// jQueryでは、セレクタとメソッド、さらにパラメータを用いて、「どこに対して何を行うか」を記述している。
// 上記のコードは、「bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい」という意味
