# extendJs
扩展 JavaScript 的方法库
<p align="center">
  
  <a href="https://www.npmjs.com/package/extend_js"><img src="https://img.shields.io/badge/npm-v0.0.6-brightgreen.svg" alt="License"></a>
</p>
## 使用方法
#### 1. npm 引用
```bash
npm install extend_js --save
```
```javascript
import 'extend_js'
```
#### 2. script 引用
```html
<script src='extend_js.js'></script>
```

## exmaple
#### 1.判断数组内是否存在某个元素
```javascript
 // 数组元素本身是个对象：
 var a = [{q: 1}, {b: 2}]
 a[100] = {s: 3}
 var d = {s: 3}
 _.contains(a, d) // => 100
 
 // 数组元素为Number,String:
 var a = [1, 2]
 var d = 2
 _.contains(a, d) // => 1
```
#### 2.数组去重
```javascript
 var a = [1,2,2,3,4,5,5,5]
 _.unique(a) // => [1,2,3,4,5]
```

#### 3.函数节流
```javascript
   var resize = function () {
     console.log('resize')
   }
   window.onresize = _.throttle(resize, 2000, 5000)
```
#### 4.日期转换
```javascript
   _.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
```