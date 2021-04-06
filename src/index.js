/**
 * const変数宣言
 * 再宣言上書き不可能
 */
const val1 = "const変数";
console.log(val1);

/**
 * let変数
 * 再宣言不可能
 */
let val2 = "let変数";
console.log(val2);

val2 = "let再宣言";
console.log(val2);

/**
 * constで定義したオブジェクトはプロパティの変更が可能
 * オブジェクトの定義はほぼconstを利用する
 */
const val3 = {
  name: "名前",
  age: 25
};

console.log(val3.name);
console.log(val3.age);

/**
 * constで定義した配列はプロパティの変更が可能
 */
const val5 = ["dog", "cat"];

val5[0] = "bird";
val5.push("monkey");
console.log(val5);

//テンプレート文字列

const name = "花田";
const age = 25;

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

/**
 * アロー関数
 */
const fun = (str) => {
  return str;
};
console.log(fun("funです"));

const fun1 = (num1, num2) => {
  return num1 + num2;
};
console.log(fun1(20, 20));

//分割代入

const myProfile = {
  name2: "花田",
  age2: 30
};
const message1 = `名前は${myProfile.name1}です。　年齢は${myProfile.age1}歳です`;
console.log(message1);

/**
 * コンパクト
 */
const { name1, age1 } = myProfile;
const message2 = `名前は${name1}です。年齢は${age1}歳です`;
console.log(message2);

/**
 * いろんな方法
 */
const myProfile2 = ["武", 35];

const message3 = `名前は${myProfile2[0]}です。　年齢は${myProfile2[1]}歳です`;
console.log(message3);

const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
// (name = "ゲスト") 初期値設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("花田");

/**
 * スプレッド構文
 * 順番に処理する
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー
const arr4 = [10, 40];
const arr5 = [30, 50];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * map filter を使った配列の処理
 */
// const nameArr = ["田中", "山田", "花田"];

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

/**
 * for文と一緒
 */
const nameArr = ["田中", "山田", "花田"];
nameArr.map((name) => console.log(name));

/**
 * filterは条件式を書くことができる
 */
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

/**
 *
 */
const newNameArr = nameArr.map((name) => {
  if (name === "花田") {
    return name;
  } else {
    return `'${name}さん`;
  }
});
console.log(newNameArr);

/**
 *　三項演算子
 */
//ある条件？条件がtrueのとき : 条件がfalseのとき
const val6 = 1 > 0 ? "true" : "false";
console.log(val6);

//toLocaleStringは3桁区切りにしてくれる
const num = 1200;
console.log(num.toLocaleString());

//numの文字列判定　"number"数値判定
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

/**
 * 数値判定
 */
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲";
};
console.log(checkSum(50, 100));

/**
 * 論理演算しの本当の意味　&& ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log(true);
}

if (flag1 && flag2) {
  console.log(false);
}

/**
 * 変数が設定されていなければ、
 * 左側（numNull）がfalseであれば、右側("金額未設定です")を返す
 */
const numNull = null;
const fee = numNull || "金額未設定です";
console.log(fee);

/**
 * null判定
 */
const numNull2 = 100;
const fee2 = numNull2 && "何か設定されました";
console.log(fee2);
