# devtool

这是一个浏览器插件，可以在 chromo、Firefox 等浏览器上使用

## 如何使用

1. 安装插件
2. 进入到需要查看的页面
3. 呼出开发者工具，切换到 `Components` tab 下，然后可以通过下面两种方式选中页面组件
   - 在 tab 里搜索栏搜索组件的 `displayName`
   - 通过 tab 左上角提供的选择工具在页面中选择
4. 就可以在 tab 右侧看到页面组件所接收到的 props、state

**注意**

1. 上述第 3 点选中页面组件，推荐使用 `搜索` 的方式
2. 定义组建时：
   - 命名需要大写，不然在插件中会显示为 `Anonymous`
   - 不要命名为 Index 等常见的名称，搜索时不好第一时间定为到
   - 如果老页面已经是上面两种命名方式，可以通过设置 `displayName` 来处理，搜索时直接使用 `displayName` 即可，具体案例如下所示

```js
const Index = () => {
  return <div>123</div>;
};
Index.displayName = "SymbolDemo";
export default Index;
```
