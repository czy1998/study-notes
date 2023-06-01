### Generator

### 简介

语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

### 具体使用

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

#### 使用`yield*`实现 Generator 内调用 Generator

```js
/* 不使用 yield* */
function* demo() {
    yield 1
    yield 2
}
function* demo1() {
    yield 'qq'
    for (let a of demo()) {
        console.log(a)
    }
    yield 'ww'
}
for (let a of demo1()) {
    console.log(a)
}
// 输出结果 'qq' 1 2 'ww'

/* 使用 yield* */
function* demo() {
    yield 1
    yield 2
}
function* demo1() {
    yield 'qq'
    yield* demo()
    yield 'ww'
}
for (let a of demo1()) {
    console.log(a)
}
// 输出结果 'qq' 1 2 'ww'
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

#### 实现嵌套数组的平铺

```js
function* iterTree(list) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            yield* iterTree(list[i])
        }
    } else {
        yield list
    }
}

const demo = [1, [2, 3], [4, [5, [6, 7], 8]]]

for (let item of iterTree(demo)) {
    console.log(item)
}
// console.log([...aa(demo)])
```

#### 遍历完全二叉树

```js
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
    this.left = left
    this.label = label
    this.right = right
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
    if (t) {
        yield* inorder(t.left)
        yield t.label
        yield* inorder(t.right)
    }
}

// 下面生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null)
    return new Tree(make(array[0]), array[1], make(array[2]))
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]])

// 遍历二叉树
var result = []
for (let node of inorder(tree)) {
    result.push(node)
}

result
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```
