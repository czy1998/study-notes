### Generator

### 简介

语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

### 具体实现

除了 for...of 循环以外，扩展运算符（...）、解构赋值和 Array.from 方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。

```js
function* numbers() {
    yield 1
    yield 2
    return 3
    yield 4
}

// 扩展运算符
;[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers()
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
    console.log(n)
}
// 1
// 2
```

#### 利用 for...of 循环，遍历任意对象（object）

原生的 JavaScript 对象没有遍历接口，无法使用 for...of 循环，通过 Generator 函数为它加上这个接口，就可以用了。

```js
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj) // Reflect.ownKeys 方法会返回 Symbol 类型的 key

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]]
    }
}

let jane = { first: 'Jane', last: 'Doe' }

for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`)
}

// 打印结果：
// first: Jane
// last: Doe
```

#### 实现斐波那契数列

```js
function* fibonacci() {
    let [prev, curr] = [0, 1]
    for (;;) {
        yield curr
        ;[prev, curr] = [curr, prev + curr]
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break
    console.log(n)
}
```
