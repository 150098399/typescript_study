// never 表示永远不会发生值的类型,比如一个函数:
// 一个函数中是一个死循环或者抛出一个异常

function foo(): never {
  // 死循环
  while(true) {

  }
}


// 抛出异常

function bar(): never {
  throw new Error()
}