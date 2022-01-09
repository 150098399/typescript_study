type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number
  }
}

const info: Person = {
  name: "小虎",
  friend: {
    name: "小青"
  }
}

// 另一个文件调用
console.log(info.name)
// console.log(info.friend.name)    // friend是一个可选类型，运行会报错
console.log(info.friend?.name)      // 可选链使用，如果friend存在，则执行friend.name 如果friend不存在，返回undefined
