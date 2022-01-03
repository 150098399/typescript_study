function foo(msg) {
  console.log(msg.length)
}

foo(111)

console.log('前边传参出错，我就执行不到了')

// foo 函数被调用时，没有做参数校验
// 1. 没有对类型进行校验
// 2. 没有对是否传入参数进行校验