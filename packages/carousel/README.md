## Installation


#### To install a component run
`$ npm install @hawk-ui/carousel --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/carousel/dist/index.min.css
```


## Usage


#### Contained carousel:
[Demo](https://hawk.oncrypt.co/#!/Carousel/1)
```js static
import Carousel from '@hawk-ui/carousel';
```
```js
initialState = {
  slides: [
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
        backgroundColor: 'lavender',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
        backgroundColor: 'lavenderblush',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
        backgroundColor: 'lavender',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
        backgroundColor: 'lavenderblush',
      }}
    />,
  ],
};

<Carousel
  id="carousel1"
  slides={state.slides}
  options={{
    display: 1,
    width: 100,
  }}
/>
```


#### Card carousel:
[Demo](https://hawk.oncrypt.co/#!/Carousel/2)
```js static
import Carousel from '@hawk-ui/carousel';
```
```js
initialState = {
  slides: [
    <div
      style={{
        height: '250px',
        width: '400px',
        flex: '0 0 400px',
        backgroundColor: 'lavender',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '400px',
        flex: '0 0 400px',
        backgroundColor: 'lavenderblush',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '400px',
        flex: '0 0 400px',
        backgroundColor: 'lavender',
      }}
    />,
    <div
      style={{
        height: '250px',
        width: '400px',
        flex: '0 0 400px',
        backgroundColor: 'lavenderblush',
      }}
    />,
  ],
};

<Carousel
  id="carousel2"
  slides={state.slides}
  variant="card"
  options={{
    display: 2,
    width: 400,
  }}
/>
```


#### Poster carousel:
[Demo](https://hawk.oncrypt.co/#!/Carousel/3)
```js static
import Carousel from '@hawk-ui/carousel';
```
```js
initialState = {
  header: [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg',
  ],
  slides: [
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
      }}
    >
      <img
        src="https://www.w3schools.com/howto/img_nature_wide.jpg"
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </div>,
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
      }}
    >
      <img
        src="https://www.w3schools.com/howto/img_snow_wide.jpg"
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </div>,
    <div
      style={{
        height: '250px',
        width: '100%',
        flex: '0 0 100%',
      }}
    >
      <img
        src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </div>,
  ],
};

<Carousel
  id="carousel3"
  slides={state.slides}
  header={state.header}
  panes={[]}
  variant="poster"
  options={{
    display: 1,
    width: 100,
  }}
/>
```