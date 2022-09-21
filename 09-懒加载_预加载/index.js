console.log('index.js 加载了');



document.getElementById('btn').onclick = function () {
  console.log('点击');
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./sub').then(({
    subFn
  }) => {
    console.log(subFn(1, 2));
  })
}

// import {subFn} from './sub'
// subFn(1,2)