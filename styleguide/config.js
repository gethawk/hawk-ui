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
      ]),
    },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
