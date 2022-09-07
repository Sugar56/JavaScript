// varによる再宣言 　○
// letによる再宣言 　×
// constによる再宣言 ×

var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// console.logを使用するとConsoleタブの中に値が展開される
// デベロッパーツールで確認できる
