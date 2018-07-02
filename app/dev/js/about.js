$(document).ready(function() {
    let resumeEditorContent = `
# 关于本站

### 建站初衷

本人前端码农一枚，之前用博客是用hexo搭建。
近期，emmm...也不是近期啦，其实早就开始学习nodejs，
但由于工作任务繁重，学一点就放下，学一点又放下，
断断续续没什么收获，所以以这个项目来练练手，
顺便搭建一个属于自己的个人博客系统。

### 技术栈

- Node.js
- Express
- Mongodb
- Jade (Pug)

### 后台管理 -> [请戳这里](http://www.baidu.com)

- Vue
- iView
`;

    let current = '';
    let count = 0;
    let showResumeContent = () => {
        let len = resumeEditorContent.length;
        let showContent = () => {
            let currentLen = current.length;
            let timer;
            if (currentLen < len) {
                current += resumeEditorContent[count];
                count++;
                $('.mark_dowm').html(marked(current));
                timer = setTimeout(showContent, 40);
            } else {
                clearTimeout(timer);
            }
        };
        showContent();
    };
    showResumeContent();
});
