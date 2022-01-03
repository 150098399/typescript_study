// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意类型

function foo() {
  return 'abc';
}

function bar() {
  return 123;
}

let flag = true;

let result: unknown;
if (flag) {
  result = foo();
} else {
  result = bar();
}

console.log(result)
