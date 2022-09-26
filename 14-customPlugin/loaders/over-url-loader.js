/* over-url-loader

文件超出大小时自定义上传cdn, 替换资源路径

待处理
- [] 文件hash Map 缓存
*/
const path = require('path')
const fs = require('fs')
const _loaderUtils = require('loader-utils')
const loader = async function (content, map, meta) {
  const {
    maxSize,
    mappingJson,
    fallback
  } = this.query
  const curFilePath = this.resourcePath
  const curFileStat = fs.statSync(curFilePath)

  console.log('\n\n\n', _loaderUtils.getHashDigest(content, 'md5', 'base64', 10));

  // 超出限定大小
  if (maxSize < curFileStat.size) {
    const callback = this.async();
    // 获取文件指纹
    const fileFingerprint = _loaderUtils.interpolateName(this, '[name].[contenthash].[ext]', {
      content
    })
    // 获取文件hash
    // const fileFingerprint = _loaderUtils.getHashDigest(content, 'md5', 'base64', 10)
    // 异步获取图片上传结果 , 输出为 图片cdn链接
    const res = await fallback.call(content, map, meta)
    // mappingJsonData[fileFingerprint] = res
    callback(null, `module.exports = "${res}"`)
  } else {
    return content
  }
}

module.exports = loader
module.exports.raw = true;