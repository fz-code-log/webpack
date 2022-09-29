const fn3 = (val) => {
  return val + 'fn3'
}

const fn4 = (val) => {
  return val + 'fn4'
}

String.prototype.alert = function(){
  alert('commom 副作用方法'+this)
}

// console.log(String);

module.exports = {
  fn4,
  fn3
}

console.log('commom 模块加载');

