// Hello World 也可以作为类型，叫做字面量类型
const message: "Hello World" = "Hello World"


// 字面量类型的意义，就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center'

let align: Alignment = 'left'
align = 'right'
align = 'center'

console.log(align)

