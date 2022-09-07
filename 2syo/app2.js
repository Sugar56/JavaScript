//変数に文字列代入
let hello = 'Hello World';
alert(hello);


//変数に整数代入（負数、小数点なども可）
let int1 = 1;
alert(int1);


//四則演算
alert(4 + 3);


//文字列の結合
alert('Hello' + 'World');


//変数を利用した文字列の結合
let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);


//条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


//繰り返し処理
//while文（do...while文もある）
let max = 100;
let num1 = 1;
let count = 0;

while(num1 < max){
  num1 = num1 * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


//for文
let i;
let num2 = 0;

for(i = 1; i < 11; i++){ //「i++」は「i = i+1」と同じ
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です');
