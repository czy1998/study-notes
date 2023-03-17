// 新开窗口
// 获取新窗口的document对象
// window.open 是提供了打开一个新的窗口的方法,当前的网页文档内容会被保留
// document.open 可用于重写当前的文档内容或者追加内容
// document.close 用于结束由 对文档的 Document.write() 写入操作
function click() {
    var w = window.open()
    var d = w.document
    // 打开一个文档，以便写入数据
    d.open()
    // 写入文档内容
    d.write('<h1>hello world</h1>')
    d.write('<div style="color:#ccc">早上好</div>')
    d.title = '新窗口'
    // 关闭文档
    d.close()
    var time
    setTimeout(() => {
        w.close()
        // alert('窗口已关闭')
        clearTimeout(time)
    }, 1000)
}
function click1() {
    click()
}
