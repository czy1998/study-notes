### 技巧

1. 打开浏览器控制台，选中标签，通过 `$0.__proto__` 可以获取 DOM 元素的类型
2. 通过 `$0.offsetParent`返回一个指向最近的（指包含层级上的最近）**包含该元素的定位元素**或者最近的 table, td, th, body 元素。
3. **复制内容至粘贴板**

   ```js
   async function copy(content) {
     // 如果 navigator.clipboard 不存在的话，可以使用 Document.execCommand()，不过后者在 MDN 里是被标注已弃用，不推荐使用
     if (navigator.clipboard) {
       await navigator.clipboard.writeText(content);
       return;
     }
     if (document.execCommand) {
       const textArea = document.createElement("textarea");
       textArea.value = content;
       textArea.style.display = "none";
       document.body.appendChild(textArea);
       textArea.select();
       try {
         document.execCommand("copy");
       } catch (err) {
         console.error("copyText:", err);
       }
       document.body.removeChild(textArea);
       return;
     }
     throw new Error("Your client does not support copy function");
   }
   ```

   如果直接在控制台执行如下代码，则会报错。这是因为当前焦点在 console 面板，不在 document 里。
   解决办法有俩种：

   - 将 copy 方法放在 element 的 onclick 里执行
   - 在执行 copy 方法外添加 setTimeout，手动延迟，然后在用鼠标将焦点移到 document 里

   ```js
   copy("13123");

   // Uncaught (in promise) DOMException: Document is not focused.
   ```

4. 重发 network 里的请求 / 修改参数重新发送 / 拷贝出来在 终端、postman、apifox 等工具使用

   - 选择已有的请求，右键，选择 `Replay XHR` 即可重新发送该请求
   - 选择已有的请求，右键，选择 `Copy as fetch` ，然后将复制的内容粘贴到 `console` 里，修改需要变动的参数，并作如下处理，然后回车即可在 network 里查看修改参数后的请求了
     ```js
       fetch(...)
       .then(res => res.json()) // 末尾加上这一行
     ```
   - 选择已有的请求，右键，选择 `Copy as cUrl`，然后直接拷贝到`终端`再回车、在 postman、apifox 里则需找到 `import` 按钮 / `+` 按钮，然后粘贴到对应工具里即可

5. devTools 快捷键

   **面板相关**

   ```sh
   ctrl + ~        # 聚焦到控制台-console面板 / 打开控制台-console面板
   cmd + shift + D # 切换开发者工具的位置，下方 / 右侧两个位置相互切换
   cmd + []        # 切换 tab，左括号就是向左切换，向右同理
   ```

   **调节样式**

   常用于调整宽高、边距等

   ```sh
   tab         # 切换到下一个样式属性
   shift + tab # 切换到上一个样式属性
   ⬆️          # 属性值加 1
   shift + ⬆️  # 属性值加 10
   cmd + ⬆️    # 属性值加 100
   alt + ⬆️    # 属性值加 0.1
   ⬇️          # 向下同理
   ```

   **命令面板**

   ```sh
   cmd + shift + P  # 呼出命令面板
   screenshot       # 输入关键词，进行进行截图
   ```

6. **快速搜索(切换)tab，可以跨窗口切换**

   ```sh
     cmd + shift + a # 快速搜索(切换)tab，可以跨窗口切换
     cmd + alt + 左/右方向键 # 切换左右tab
   ```

7. 快速搜索元素

   在 console 面板下，输入如下结构代码，即可获取页面所有包括 class `breadcrumbs__link` 的节点的数组

   ```js
   $$(".breadcrumbs__link"); // (3) [a.breadcrumbs__link, span.breadcrumbs__link, span.breadcrumbs__link]
   ```

8. 快速运行 snippet(代码片段)

   1. cmp + p 唤出【打开文件】面板
   2. 输入英文感叹号 `!`
   3. 即可上下选择需要运行的 snippet
