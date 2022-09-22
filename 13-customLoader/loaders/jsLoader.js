let moduleIndex = 0
const path = require('path')
const loaderUtils = require('loader-utils')

module.exports = function(content, map, meta){
  this.emitFile('./test.text', 'asdfasdf')
  // if (this.cacheable) {
  //   this.cacheable()
  // }
  // // this.utils.contextify((context, request) => {
  // //   console.log('------',context, request);
  // // })
  // this.getOptions(schema=>{
  //   console.log('schema', schema);
  // })
  // moduleIndex++
  // console.log('content', `
  // ------ [${moduleIndex}]
  // ${map}

  // ------
  // `);
  return content
}

module.exports.raw = true;