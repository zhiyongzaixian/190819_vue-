
/*
* 混入：
*   1. 定义一个同VM实例对象一样的对象
*   2. 混入书写的结构同vm的结构一样
*   3. 使用混入： mixins:  [混入对象]
*   4. 组件内部的数据的优先级高于混入数据的优先级
*
*
* */

export default {
  data(){
    return {
      msg: '混合数据'
    }
  },
  methods: {
    _chunk(target, size){
      if(!Array.isArray(target) || size <=0){
        return target
      }
      let result = []
      while(target.length > size){
        result.push(target.splice(0, size))
      }
      !!target.length && result.push(target)
      return result
    }
  }
}
