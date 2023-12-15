
- [vscode 快捷键 for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

>
    折叠所有区域代码:  Ctrl + K Ctrl + 0

    展开所有折叠区域代码：Ctrl + K  Ctrl + J 
    
    删除空行：ctrl+h键进行正则匹配：^\s*(?=\r?$)\n

    格式化代码： Shift + Alt + F

    多行光标：Shift + Alt + 鼠标左键

    跳到某行： Ctrl+ G 然后在弹出的框中输入行数就可以了

    转到文件： Ctrl + P

    显示快捷键： Ctrl + K Ctrl + S

    查看定义： Alt + F12

- vsCode 添加浏览器调试和 js 调试的方法

安装插件 Debugger for Chrome

直接按 F5,在 launch.json 文件中的配置如下

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "谷歌浏览器", //运行html文件，用谷歌浏览器打开
      "type": "chrome",
      "request": "launch",
      "url": "${file}",
      "sourceMaps": true,
      "webRoot": "${workspaceRoot}"
    },
    {
      "name": "nodeLauch", //单独调试js，即可以直接运行js
      "type": "node",
      "request": "launch",
      "program": "${file}", //这个配置成你要调试的文件、${file}当前打开的文件
      "stopOnEntry": false,
      "args": [],
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": null,
      "runtimeArgs": ["--nolazy"],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "internalConsole",
      "preLaunchTask": "",
      "sourceMaps": false,
      "outDir": null
    }
  ]
}
```