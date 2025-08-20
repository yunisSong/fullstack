/*************************************************/
/************** Variables ************************/
/*************************************************/
const x = 1;
let y = 5;
console.log(x, y);

y += 10;
console.log(y);

y = "hello";
console.log(y);
// const 不能被修改

/*************************************************/
/************** Arrays ***************************/
/*************************************************/

const t = [1, 2, 3];
t.push(4);
console.log(t);
console.log(t.length);
console.log(t[0]);
t.forEach((item) => {
  console.log(item);
});

const t2 = t.concat(8);
console.log(t2);
const t3 = t.concat([9, 10]);
console.log(t3);

const m1 = t.map((item) => {
  return item * 2;
});
console.log(m1);

const m2 = t.map((item) => {
  return "<li>" + item + "</li>";
});
console.log(m2);
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]

const [first, second, ...rest] = t;
console.log("first, second, ...rest: ", first, second, rest);
// first, second, ...rest:  1 2 [ 3, 4 ]

/*************************************************/
/************** Objects **************************/
/*************************************************/

const object1 = {
  name: "tan",
  age: 18,
};
console.log(object1.name);
console.log(object1["age"]);
// 也可以通过使用点符号或方括号来为一个对象即时添加属性。
object1.gender = "male";
console.log(object1);

/*************************************************/
/************** Functions ************************/
/*************************************************/

function add1(a, b) {
  return a + b;
}
const add2 = (a, b) => {
  console.log("a, b: ", a, b);
  return a + b;
};
const add3 = (a, b) => a + b;
console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));

const square = (x) => x * x;
console.log(square(3));

// 箭头函数没有自己的 this 绑定，它的 this 绑定的是定义时的上下文，而不是调用时的上下文。
// 箭头函数没有 arguments 对象。
// 箭头函数不能用作构造函数。
// 箭头函数没有 prototype 属性。
// 箭头函数不能使用 yield 关键字，因此不能用作生成器函数。
// 箭头函数不能使用 new 关键字调用。
// 箭头函数不能使用 call()、apply()、bind() 方法来改变 this 绑定。
// 箭头函数不能使用 new.target 关键字。
// 箭头函数不能使用 super 关键字。
