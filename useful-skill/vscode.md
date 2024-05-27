# vs code

1. 批量修改标签
   假定需要批量修改标签名称，即可选中一个标签，按下 F2 即可进行批量修改

2. 自定义配置快捷键

   - cmd + shift + p 呼出命令面板 (windows 上则是 ctrl + shift + p )
   - 搜索 keyjson ，选择 `打开键盘快捷方式(JSON)`，即可查看用户自定义配置的快捷键
   - 自定义 git 相关快捷键
     ```json
     [
       {
         "key": "cmd+g cmd+i",
         "command": "git.checkout"
       },
       {
         "key": "cmd+g cmd+c",
         "command": "git.branch"
       },
       {
         "key": "cmd+g cmd+u",
         "command": "git.pull"
       },
       {
         "key": "cmd+g cmd+p",
         "command": "git.push"
       },
       {
         "key": "cmd+g cmd+m",
         "command": "git.merge"
       },
       {
         // 撤销 merge，用于 merge 出现冲突时
         "key": "cmd+g cmd+a",
         "command": "git.mergeAbort"
       },
       // 下面两个设置后，会导致终端窗口使用 cmd + k 无法清空终端
       {
         // 关闭组中右侧编辑器
         "key": "cmd+k cmd+r",
         "command": "workbench.action.closeEditorsToTheRight"
       },
       {
         // 关闭组中其他编辑器
         "key": "cmd+k cmd+o",
         "command": "workbench.action.closeOtherEditors"
       }
     ]
     ```

```sh
    cmd + k + c # 比较剪贴板内容与当前文件的区别
    cmd + k + cmd + s # 键盘快捷方式
    cmd + k + m # 更改语言模式
```

3. 多光标同时修改

- Mac 上的 ⌘ 也就是 command 键对应 Windows 上的 ctrl，command 键简称 cmd
- Mac 上的 ⌥ 也就是 option 键对应 WIndows 上的 alt

  **通用方法**
  按住 ⌥ 键不放，再将光标移动到任何你想添加光标的地方直接点击就会增加一个光标。
  ![图](https://pic1.zhimg.com/v2-4cbc821d1ee007429f6db58d499ff44b_720w.webp?source=d16d100b)

  **光标相关快捷键**
  我们可以通过 ⌘+K, ⌘+S 快捷键组合打开 VSCode 快捷键表，搜索 cursor 会列出所有和光标有关的快捷键
  ![图](https://pic3.zhimg.com/80/v2-dac5053c8232abcd73c95eec52f1531e_1440w.webp)

  同一列添加光标：

  - ⌘+⌥+↓: 在下一行同一列添加光标
  - ⌘+⌥+↑: 在上一行同一列添加光标

  ![图](https://pic2.zhimg.com/v2-fd0d05dc71ca4d44cd9885da31156837_720w.webp?source=d16d100b)

  **添加选区**
  VSCode 编辑器中可以同时存在多个光标，也可以同时存在多个选区。在 VSCode 中大多数添加选区的命令，添加选区的同时也会添加一个光标。因此我们可以利用添加选区的快捷键来添加多光标。

  常用的有：

  - ⌘+D：添加选区到下一个查找到的匹配，如果匹配到多个，每触发一次就多添加一个
  - ⇧+⌘+L: 添加选区到所有查找到的匹配

  ![图](https://pic2.zhimg.com/v2-33af7106b1befaa42d74d3909e1d35cd_720w.webp?source=d16d100b)

  如过要查找的文本比较复杂，我们可以直接先打开搜索，利用搜索框提供的 `大小写忽略`，匹配整个单词，正则 功能来查找复杂的文本，再使用 ⌘+⇧+L 来选中所有。
  ![图](https://pic3.zhimg.com/v2-5e6e4aaba5aa585ab076217a28074aa6_720w.webp?source=d16d100b)

  **如果已经有一个选区**，我们可以使用快捷键 ⌥+⇧+I 来在选区的所有行尾添加光标。如果这个时候你想将光标移动到行首，直接输入 `Home` 键即可。

  下面的例子就是先选中多行，再将光标添加到所有行的行尾，将 TypeScript 的 interface 改成使用逗号来分隔属性：
  ![图](https://pic2.zhimg.com/v2-738d14f9862c9c54ee1de9233da00cc1_720w.webp?source=d16d100b)

4. 顶部固定所在作用域的头部，滚动也不受影响，一直固定
   `Editor > Sticky Scroll: Enabled` 开启 Vs Code 里的这个配置即可使用

5. 页面拆分

```sh
  ctrl + alt + 右方向键 #可以将当前标签页向右拆分，
  ctrl + alt + 左方向键 #可以将拆分的标签页还原
```

6. 聚焦相关
   **注意输入法要切到英文**

```sh
  ctrl + ~ # 若终端已开启则聚焦到终端（已聚焦则关闭终端）/若没开启则开启终端
  ctrl + 数字 # 切换到第几个tab的工作区
  cmd + 1 # 波浪键后面的数字1，切换到终端上面的工作区
  cmd + shift + e # 聚焦到资源管理器
  ctrl + shift + g # 聚焦到源代码管理
```

7. 窗口相关

```sh
  cmd + M # 缩小窗口
  ctrl + w # 切换窗口，可以切换到最小化的窗口
  cmd + alt + 左/右方向键 # 切换终端tab
  cmd + shift + 左/右中括号 # 切换工作区tab
```

8. 折叠相关

```sh
  cmd + alt + 左中括号 # 折叠代码，连续按则是将上一级折叠
  cmd + alt + 右中括号 # 展开代码，就当前一级
  cmd + k + cmd + l   # 展开/收起切换
```

### 参考文章

[VSCode 又酷又实用的多光标编辑](https://juejin.cn/post/7079693787328921637)
