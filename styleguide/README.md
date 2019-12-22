We created this styleguide to act as a central location where we house a live inventory of  React UI components. Anyone working on the **Hawk** product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.

*Usage:*
Currently the library ishosted on NPM as https://www.npmjs.com/org/hawk-ui

To install a component run
```shell noeditor
yarn install @hawk-ui/<package name>
```
Note: Used with [reset.css](https://meyerweb.com/eric/tools/css/reset/)

Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/<package name>/dist/index.min.css';
```

To use any component,
```js static
import ComponentName from '@hawk-ui/<package name>';
```