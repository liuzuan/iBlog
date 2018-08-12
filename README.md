# 写在前面

本人前端码农一枚，之前用博客是用 hexo 搭建。近期，emmm...也不是近期啦，其实早就开始学习 nodejs，但由于工作任务繁重，学一点就放下，学一点又放下，断断续续没什么收获，所以拿这个项目来练练手，顺便搭建一个属于自己的个人博客系统。

整个项目分为两部分：博客页面 ssr，内容管理系统 csr

**注：此项目纯属个人瞎搞，仅用于个人学习。**

# 说明

> 项目代码仓库地址：[博客 git 地址](https://github.com/liuzuan/iBlog) 、 [后台管理系统地址](https://github.com/liuzuan/iBlog-CMS)

# 技术栈

Node.js + Express + Jade + MongoDB + es6/7 + Vue + Vue-Router + Vuex + iView

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

访问: http://localhost:3000
```

# 效果演示

[点我进入博客](http://blog.liuzuann.com)（响应式布局，兼容 pc、移动端）


[![二维码](http://cdn.liuzuann.com/qrcode-blog.png-thin)](http://blog.liuzuann.com)


[点我进入内容管理](http://blog.liuzuann.com/CMS) (账号可自行注册）

## 目标功能

#### 1. 博客页面

-   [x] 文章展示 -- 已完成
-   [x] 开源作品展示 -- 未完成
-   [x] 我的图库 -- 未完成
-   [x] 留言 -- 未完成
-   [x] 关于我 -- 未完成

#### 2. 内容管理

-   [x] 注册、登录 -- 已完成
-   [x] 博客文章管理-- 已完成
-   [x] 博客分类管理 -- 已完成
-   [x] 用户头像上传 -- 已完成
-   [x] 用户信息修改 -- 已完成
-   [x] 文章插图上传 -- 已完成
-   [x] 图库图片管理 -- 未完成
