"use strict";$(function(){$("#about").pagepiling({loopBottom:!0,loopTop:!0,navigation:{position:"left",tooltips:["首页","技能","供职","联系我"]}});var t,e="\n# 关于本站\n\n### 建站初衷\n\n本人前端码农一枚，之前用博客是用hexo搭建。\n近期，emmm...也不是近期啦，其实早就开始学习nodejs，\n但由于工作任务繁重，学一点就放下，学一点又放下，\n断断续续没什么收获，所以以这个项目来练练手，\n顺便搭建一个属于自己的个人博客系统。\n\n### 技术栈\n\n- Node.js\n- Express\n- Mongodb\n- Jade (Pug)\n",i="",a=0;t=e.length,function n(){var o=void 0;i.length<t?(i+=e[a],a++,$(".mark_dowm").html(marked(i)),o=setTimeout(n,40)):clearTimeout(o)}()});