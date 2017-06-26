# extendJs
扩展 JavaScript 的方法库
## 使用方法
```javascript
<script src='_extendJs.js'></script>
```

#### 1.判断数组内是否存在某个元素/对象
```javascript
 // 数组元素本身是个对象：
 var a = [{q: 1}, {b: 2}]
 a[100] = {s: 3}
 var d = {s: 3}
 a.contains(d) // => 100
 
 // 数组元素为Number,String:
 var a = [1, 2]
 a[100] = 3
 var d = 3
 a.contains(d) // => 100
```
