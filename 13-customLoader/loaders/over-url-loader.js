const path = require('path')
const fs = require('fs')
const _loaderUtils = require('loader-utils')

/* over-url-loader
图片超出大小后 , 上传至cdn , 并缓存其url, 后续加载 , 如果内容不变 url 不变

判断是不是 base64 , 如果非 base64 , 则对比 缓存
*/
const loader = async function (content, map, meta) {
  // const content2 = 'module.exports = "https://img1.baidu.com/it/u=3286787633,3266085819&fm=253&fmt=auto&app=138&f=JPEG?w=670&h=447"'
  const {
    maxSize,
    mappingJson,
    fallback
  } = this.query
  const curFilePath = this.resourcePath
  const curFileStat = fs.statSync(curFilePath)

  // 超出限定大小
  if (maxSize < curFileStat.size) {
    const callback = this.async();
    const res = await fallback.call(content, map, meta)
    // 获取文件指纹 与 上传的url
    const fileFingerprint = _loaderUtils.interpolateName(this, '[name].[contenthash].[ext]', {
      content
    })
    mappingJsonData[fileFingerprint] = res
    callback(null, `module.exports = "${res}"`)
  } else {
    return content
  }
}

module.exports = loader
module.exports.raw = true;