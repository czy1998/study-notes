# cursor

cursor 是一款基于 VSCode 的 AI 优先编辑器

## 使用方式

- 唤出命令面板（cmd + shift + P）输入 `cursor settings` 打开 cursor 设置面板，可以
  - 配置 AI 模型
  - 添加文档
- tab 代码补全功能
- 文件内唤出提示框（cmd + k）: 生成 or 修改局部（当前文件）代码
- 唤出聊天面板（cmd + L）: 有三个模式可以切换
  1. 正常对话 `chat`
  2. 协作对话 `composer` 根据你的需求 可以创建文件和修改代码
  3. 发现 `bug bug finder` 发现你项目中的 bug 和修复它
- 终端唤出对话面板（cmd + K）: 可以描述想要的指令效果，ai 会生成相应的 指令 到光标区

## 自定义快捷键配置

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
    "key": "cmd+g cmd+a",
    "command": "git.mergeAbort"
  },
  {
    "key": "alt+cmd+t",
    "command": "-workbench.action.closeOtherEditors"
  },
  {
    "key": "cmd+g b",
    "command": "workbench.action.maximizeEditorHideSidebar"
  },
  {
    "key": "cmd+g r",
    "command": "workbench.action.evenEditorWidths"
  },
  {
    "key": "cmd+2",
    "command": "workbench.action.showAllEditorsByMostRecentlyUsed"
  },
  {
    "key": "cmd+r w",
    "command": "workbench.action.closeEditorsToTheRight"
  },
  {
    "key": "cmd+l",
    "command": "-aichat.newchataction"
  },
  {
    "key": "cmd+l",
    "command": "-composer.sendToAgent",
    "when": "editorHasPromptBar && editorPromptBarFocused"
  },
  {
    "key": "cmd+l",
    "command": "expandLineSelection",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+p",
    "command": "-expandLineSelection",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+k",
    "command": "-aipopup.action.modal.generate",
    "when": "editorFocus && !composerBarIsVisible"
  },
  {
    "key": "cmd+k cmd+[BracketRight]",
    "command": "editor.unfoldRecursively",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+r cmd+[BracketRight]",
    "command": "-editor.unfoldRecursively",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+k cmd+[BracketLeft]",
    "command": "editor.foldRecursively",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+r cmd+[BracketLeft]",
    "command": "-editor.foldRecursively",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+k cmd+l",
    "command": "editor.toggleFold",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+r cmd+l",
    "command": "-editor.toggleFold",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "cmd+k c",
    "command": "workbench.files.action.compareWithClipboard"
  },
  {
    "key": "cmd+r c",
    "command": "-workbench.files.action.compareWithClipboard"
  },
  {
    "key": "cmd+k m",
    "command": "workbench.action.editor.changeLanguageMode",
    "when": "!notebookEditorFocused"
  },
  {
    "key": "cmd+r m",
    "command": "-workbench.action.editor.changeLanguageMode",
    "when": "!notebookEditorFocused"
  },
  {
    "key": "cmd+k cmd+i",
    "command": "editor.action.inlineSuggest.trigger"
  }
]
```

### 参考资料

- [cursor 使用经验分享，满满干货](https://juejin.cn/post/7440482461762601010?searchId=20250205111425104977DC39406C6F8A96)
