// css 在 webpack 中的配置
import style from "./main.css"
import style2 from "./style.less"

import img2 from './assets/star.png'

// 别名(@)在 webpack 中的配置
// import * as format from './utils/format'
import * as format from 'utils/format' // utils ?  没有相对路径  回想@  => 别名

// React 项目在 webpack 中的配置
import App from "./App"

// js（ es5 / es6 ） 在 webpack 中的配置
// console.log('我是测试案例')
const arr = [1, 2, 3]
const iAmJavascriptES6 = () => console.log(...arr)
window.iAmJavascriptES6 = iAmJavascriptES6

// 图片资源在 webpack 中的配置
var oImg = new Image()
// oImg.src = require('./assets/star.png') // 当成模块引入图片
oImg.src = img2
document.getElementById('image').appendChild(oImg)

console.log(format('hello webpack'))