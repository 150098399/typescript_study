// 如果函数参数是一个可选类型，无论调用时是否传参，运行都会报错，用非空类型断言可以在传了参数的时候正常运行
// 非空类型断言的符号是 ！

function test(message?: string) {
  console.log(message!.length)
}

test('kkk')