"use strict";$(document).ready(function(){var o,t="\n# 关于本站\n\n### 建站初衷\n\n本人前端码农一枚，之前用博客是用hexo搭建。\n近期，emmm...也不是近期啦，其实早就开始学习nodejs，\n但由于工作任务繁重，学一点就放下，学一点又放下，\n断断续续没什么收获，所以以这个项目来练练手，\n顺便搭建一个属于自己的个人博客系统。\n\n### 技术栈\n\n- Node.js\n- Express\n- Mongodb\n- Jade (Pug)\n\n### 后台管理 -> [请戳这里](http://www.baidu.com)\n\n- Vue\n- iView\n",m="",d=0;o=t.length,function n(){var e=void 0;m.length<o?(m+=t[d],d++,$(".mark_dowm").html(marked(m)),e=setTimeout(n,40)):clearTimeout(e)}()});