## 一、项目结构 --- monorepo

## 二、开发组件库必备工具 --- storybook

## 三、yarn workspaces

工作区域

｜- package.json
｜- packages
｜- ｜- form
｜- ｜- ｜- package.json
｜- ｜- button
｜- ｜- ｜- package.json

```javascript
"private": true,
"workspaces": [
    "package/*"
]
```

* 工作区根目录安装开发依赖
    * yarn add jest -D -W
* 指定工作区安装依赖
    * yarn workspace wnx-form add lodash@4
* 所有工作区安装依赖
    * yarn install

## 四、Lerna

一个优化使用git和npm 管理多包仓库的工作流工具，可以一键把代码提交到git和npm仓库

* 全局安装
    * yarn global add lerna
* 初始化
    * lerna init
```javascript 
    "scripts": {
        "storybook": "start-storybook -p 6006",
        "build-storybook": "build-storybook",
        "lerna": "lerna publish"
    },
```
* 查看包list
    * lerna list
* 发布
    * yarn lerna