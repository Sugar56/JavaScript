// childrenは、HTML要素直下のすべての子要素を取得するときに使う。
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});

// 3行目は、「button要素がクリックされたときに、処理を実行してください」の意味
// .children()は、HTML要素直下のすべての子要素を取得
// 4行目でのchildrenは「ul要素の子要素」、つまり、li要素が対象
