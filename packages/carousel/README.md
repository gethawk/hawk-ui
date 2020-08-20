## Installation
`$ npm install @hawk-ui/carousel --save`


## Usage


#### Without animation:
[Demo]()
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
[Demo]()
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