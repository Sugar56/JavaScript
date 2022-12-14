// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// thisは、イベントが発生した要素のみ変化させたいときに使う。
// また、コードをシンプルにまとめることができる。（以下は、上記の記述をまとめた記述）
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

// thisは、「クリックされた要素」を指しています。
// コメントアウトのコードでは、それぞれの正方形に個別にclass属性を指定していた。
// 上記のコードでは、「box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる」という設定になる。

// thisを使うと、多くの処理をまとめて書くことができる。
// デメリットは、コード上からでは、何をクリックしたときに動作するのか判別しにくい。
