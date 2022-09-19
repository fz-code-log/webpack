// import "@babel/polyfill" // 使用 polyfill 兼容高级写法
import './style.scss'
import {subFn} from './sub'

console.log('subFn--------',subFn(1,9))
const alertMsg = (msg) => {
  console.log(`msg:${msg}`);
}

const testObj = {
  a: {
    b: {
      c: 1
    }
  }
}

const delayFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('延迟输出结果')
    }, 3000);
  })
}

(async ()=>{
  const delayRes = await delayFn()
  console.log('delayRes', delayRes);
})()

try {
  const attr = testObj?.b?.n || 'xx'
  console.log(attr, 'attr');
} catch (error) {
  console.error('error-----', error)
}

alertMsg('输出信息')


