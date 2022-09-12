$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// ハンバーガーメニュー用の設定
// .toggleClass()でclass属性を切り替える
// .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
// トグル処理は、該当のclass属性がある場合にclassが削除され、ない場合にはclassが追加される。

// HTMLファイルの26行目には、activeは指定されていない。
// このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される。
// このように、.toggleClass()によって、class属性の追加と削除が交互に行われる。

// $(this)は、クリックされた要素自身を表す。

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
// ハンバーガーメニューを開いたときの状態を設定するのに用いる。
// #sp-menuが開いたときに、.fadeToggle()が処理されるように設定
// HTMLファイルの13行目に、#sp-menuは設定されている。
// 上記の記述よりハンバーガーメニューがクリックされた時、フェードインとフェードアウトが交互に実行される。
