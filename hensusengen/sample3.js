// varのスコープ 　       グローバルスコープ、関数スコープ（関数(function)の中でvarによって宣言された変数）
// let, constのスコープ 　グローバルスコープ、ブロックスコープ（ブロックとは() 、{}の組で区切られもの）

// varの時
var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y)

// 関数の外からyを参照しようとしても有効範囲外となりエラー

// let, constの時
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp" // yという変数は3~5行目の{ }のブロック内でletによって宣言
  }
  console.log(x)
  console.log(y)
}

foo()

// ブロック外から参照したためエラー

for (let i = 0; i < 10; i++) {  // iという変数はfor句の（）ブロック内でletによって宣言
  console.log(i)
}

console.log(i)

// ブロック外から参照したためエラー
