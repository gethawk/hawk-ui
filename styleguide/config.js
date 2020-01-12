module.exports = {
  sections: [
    {
      name: 'Hawk - Style Guide (WIP)',
      content: './README.md',
    },
    {
      name: 'Core UI Components',
      components: () => ([
        '../packages/button/src/index.js',
        '../packages/input/src/index.js',
        '../packages/checkbox/src/index.js',
        '../packages/radio/src/index.js',
        '../packages/toggle/src/index.js',
        '../packages/loader/src/index.js',
        '../packages/modal/src/index.js',
        '../packages/pagination/src/index.js',
      ]),
    },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
