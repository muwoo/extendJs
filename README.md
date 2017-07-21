# extendJs
扩展 JavaScript 的方法库
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
#### 2.判断数组内是否存在某个元素
```javascript
 var a = [{q: 1}, {b: 2}]
 a[100] = {s: 3}
 var d = {s: 3}
 _.contains(a, d)
```
