# Vue3-TS-Music

## 0、描述

学习 https://github.com/SmallRuralDog/vue3-music.git

## 1、tailwindcss

w-screen => width: 100vw;

flex => display: flex;

flex-col => flex-direction: column;

flex-1 => flex: 1 1 0%;

flex-shrink-0 => flex-shrink: 0;

items-stretch => align-items: stretch;

overflow-hidden => overflow: hidden;

w-4 => width: 1rem;

space-y-4 =>  --tw-space-x-reverse: 0;
                margin-right: calc(1rem * var(--tw-space-x-reverse));
                margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));

rounded => border-radius: 0.25rem;

transition-colors => transition-property:               background-color, border-color, color, fill, stroke;
                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                        transition-duration: 150ms;

bg-gradient-to-r => background-image: linear-gradient(to right, var(--tw-gradient-stops));

truncate => 超出显示省略号







container => width because breakpoint

-mx-2.5 => nagative left and right margin




hover-bg-main => hover 状态下应用bg-main 类





leading-normal => line-height: 1.5;

## 2、vite 自动引入 element-plus

```javascript
npm install -D unplugin-vue-components unplugin-auto-import
```

## 3、当前进度

- [x] menu 已写完 

本地歌曲、下载歌曲、最近播放 3个路由未配置

账号退出功能未写

## footer

- [ ] 上一曲、下一曲

+ 问题
`el-popover` 最小宽度为150px，改源码为auto。
node_modules\element-plus\theme-chalk\el-popover.css

