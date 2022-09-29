export const fn1 = (val) => {
  return val + 'fn1'
}

export const fn2 = (val) => {
  return val + 'fn2'
}

String.prototype.alert2 = function(){
  alert('es module 副作用方法:'+this)
}

console.log('es 模块加载');