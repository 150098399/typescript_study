
// 类型断言as
// const el = document.getElementById("longjie") as HTMLImageElement;

// el.src = "url地址"


// 特殊场景应用   不推荐
let message = "hello world";
const num: number =( message as any) as number;
console.log(num)

