# 写在前面

本人前端码农一枚，之前用博客是用hexo搭建。近期，emmm...也不是近期啦，其实早就开始学习nodejs，但由于工作任务繁重，学一点就放下，学一点又放下，断断续续没什么收获，所以以这个项目来练练手，顺便搭建一个属于自己的个人博客系统。

整个项目分为两部分：博客页面ssr，后台管理系统csr

__注：此项目纯属个人瞎搞，仅用于个人学习。__

## 说明

> 相关项目地址：[博客git地址](https://github.com/liuzuan/iBlog.git)  、 [后台管理系统地址](https://github.com/liuzuan/iBlog-CMS.git)

## 技术栈

nodejs + express + jade + mongoose + es6/7 + vue + vue-router + Vuex + iview

## 项目运行

```bash
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、mongodb (开启状态)
```

```bash
git clone https://github.com/liuzuan/iBlog.git

cd iBlog

npm install

npm run debug

访问: http://localhost:3000

```

## 效果演示

### 博客网址

[博客网址戳这里](http://blog.liuzuann.com)（响应式兼容pc、移动端）

#### 移动端扫描下方二维码

### 后台管理系统网址

[后台管理网址戳这里](http://blog.liuzuann.com/CMS) (账号:admin，密码：123456）

## 目标功能

- [x] 留言 -- 未完成