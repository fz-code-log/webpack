
class demoPlugin {
  static defaultOptions = {
    name: 'demoPlugin',
  };
  constructor(options = {}) {
    this.options = {
      ...demoPlugin.defaultOptions,
      ...options
    };
    console.log('dome 插件集成', this.options);
  }

  apply(compiler) {

    // 同步
    // compiler.hooks.compilation.tap('demoPlugin', (compilation) => {
    //   // dosomthing
    // });

    // compiler.hooks.emit.tapAsync('demoPlugin', (compilation, callback) => {
    //   // dosomthing
    //   callback();
    // })

    // compiler.hooks.emit.tapAsync('demoPlugin', (compilation) => {
    //   return new Promise((resolve, reject) => {
    //     // dosomthing
    //     resolve();
    //   })
    // })



  }
}


module.exports = {
  demoPlugin
}


// npx webpack -c 14-customPlugin\webpack.config.js