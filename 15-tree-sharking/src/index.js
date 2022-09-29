import './style.css'
// esmodules
import { fn1 } from './utils_esmodule'

console.log(fn1('index-------fn1:    '));



const commomFns = require('./utils_commom')

console.log(commomFns.fn3('index-------fn3:    '));


// '字符串'.alert()
// '字符串2'.alert2()