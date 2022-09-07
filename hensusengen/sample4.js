// 変数の巻き上げ（ホイスティング）→ 関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになるというもの
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

// 上記のコードは以下のコードと同じ

// var str = "webcamp"

// function foo() {
//   var str
//   console.log(str)
//   str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// グローバルスコープのstrという変数と、関数スコープのstrという同名の変数が存在しますが、
// console.log(str)が関数内で使用されているため、関数スコープのstrが参照される。
// 初めのconsole.logで参照されたstrは、宣言されたのみの変数で値は代入されていません。
//（厳密には、varによって宣言された変数に初期値を入れない場合には自動的にundefinedを初期値として代入します。）
// 結果、「undefined」と出力。
