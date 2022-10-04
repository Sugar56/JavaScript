// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "6d7e71d7f210996540fb554dc9201bad";

// 検索」ボタン（#btn）がクリックされたときの処理を記述
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    // 通信に成功した場合と失敗した場合の処理
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    })
  });
});

// $.ajax()は、Ajaxを実装するメソッド(オプション（パラメータ）も設定できる)
// url:では、APIにリクエストするURLを指定
// $('#cityname').val()で#citynameの値を受け取り、URLを結合
// dataTypeでは、レスポンスとして取得したいデータの型を指定
// 上記では、JSONで受け取りたいため、 dataType : 'jsonp',と記述

// $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される
// $(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される
// アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png
