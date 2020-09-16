## Installation


#### To install a component run
`$ npm install @hawk-ui/carousel --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/carousel/dist/index.min.css
```


## Usage


#### Without animation:
[Demo](https://hawk.wallnit.com/#!/Carousel/1)
```js static
import Carousel from '@hawk-ui/carousel';
```
```js
initialState = {
  slides: [
    {
      image: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      caption: 'Caption One',
    },
    {
      image: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
      caption: 'Caption Two',
    },
    {
      image: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      caption: 'Caption Thre',
    },
  ],
};

<Carousel
  id="slider1"
  slides={state.slides}
/>
```


#### With animation
[Demo](https://hawk.wallnit.com/#!/Carousel/3)
```js static
import Carousel from '@hawk-ui/carousel';
```
```js
initialState = {
  slides: [
    {
      image: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      caption: 'Caption One',
    },
    {
      image: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
      caption: 'Caption Two',
    },
    {
      image: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      caption: 'Caption Thre',
    },
  ],
};

<Carousel
  id="slider2"
  slides={state.slides}
  isAnimated
/>
```