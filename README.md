# 写在前面

本人前端码农一枚，之前用博客是用 hexo 搭建。近期，emmm...也不是近期啦，其实早就开始学习 nodejs，但由于工作任务繁重，学一点就放下，学一点又放下，断断续续没什么收获，所以拿这个项目来练练手，顺便搭建一个属于自己的个人博客系统。

整个项目分为两部分：博客页面 ssr，内容管理系统 csr

# 说明

> 项目代码仓库地址：[博客 github 地址](https://github.com/liuzuan/iBlog) 、 [后台管理系统 github 地址](https://github.com/liuzuan/iBlog-CMS)

# 技术栈

Node.js + Express + TypeScript + Pug + MongoDB + es6/7 + gulp

# 项目运行

```bash
项目运行之前，请确保系统已经安装以下应用
1、node (7.6 及以上版本)
2、mongodb (开启状态)
```

```bash
git clone https://github.com/liuzuan/iBlog.git

cd iBlog

npm install

npm run debug

gulp

```

# 效果演示

[博客页面](https://blog.liuzuann.com)（响应式布局，兼容 pc、移动端）

[![二维码](https://cdn.liuzuann.com/qrcode-blog.png-thin)](https://blog.liuzuann.com)

## 目标功能

-   [x] 博客文章 -- 已完成
-   [ ] 开源作品展示 -- 未完成
-   [ ] 我的图库 -- 未完成
-   [ ] 留言 -- 未完成
-   [x] 关于我 -- 已完成