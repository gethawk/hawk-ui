#### Basic Carousel Usage:

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

<div className="styleguidist__btns-wrap">
  <p>Without animation</p>
  <br />
  <Carousel
    id="slider1"
    slides={state.slides}
  />
  <br /><br />
  <p>With animation</p>
  <br />
  <Carousel
    id="slider2"
    slides={state.slides}
    isAnimated
  />
</div>
```
