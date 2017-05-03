### 使用记录
vue + vuex + vue-router 一些使用方式文档都已经介绍得非常详细了。
https://cn.vuejs.org/v2/guide  
http://router.vuejs.org/zh-cn/essentials/getting-started.html  
https://vuex.vuejs.org/zh-cn/  
我这里综合 vue 和 regular 介绍点别的  
1. regular 的 config 方法在 vue 中可以用 data 方法来替代
2. regular 中的 init 基本上和 vue 中的 beforeMount 方法一样
3. vue 中组件接受参数需要显示的声明 props ，这个字段的值是一个数组，包含所有接收的值以及值的一些信息（非必填）
4. vue 中所用到的字段都必须在 data 函数中显示的声明
5. vue 中一个组件用到另外一个组件也得显示的声明一个 Components ，包含用到的所有组件
6. vue 中双向绑定的实现和 regular 中的脏值检测不一样，是用 definePorperty 实现的，并没有像 regular 中的 $update 一样的全局解药，所以在 vue 中所有的修改必须让 vue 知道。对于一些数组和对象的操作，有一些 vue 是检测不到的，所以得用 vue 暴露出来的方法来修改数据。[详情见](https://cn.vuejs.org/v2/guide/reactivity.html)
7. vue 的插值和 regular 的插值语法类似，但是事件和条件渲染、列表渲染的语法都不太一样，详情见 vue 文档
8. vue 的方法都放在 methods 里面，数据不是 `this.data.xxx` 而是直接 `this.xxx`
9. 