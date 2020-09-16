## Installation


#### To install a component run
`$ npm install @hawk-ui/card --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/card/dist/index.min.css
```


## Usage


#### Box Card
[Demo](https://hawk.wallnit.com/#!/Card/1)
```js static
import Card from '@hawk-ui/card';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <div>Without Hoverable</div>
    <br />
    <Card />
  </div>

  <div>
    <div>With Hoverable</div>
    <br />
    <Card
      isHoverable
    />
  </div>

  <div>
    <div>With Clickable</div>
    <br />
    <Card
      isClickable
      onClick={() => { alert('Card Clicked'); }}
    />
  </div>
</div>
```


#### Circle Card
[Demo](https://hawk.wallnit.com/#!/Card/3)
```js static
import Card from '@hawk-ui/card';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <div>Without Hoverable</div>
    <br />
    <Card
      layout="circle"
    />
  </div>

  <div>
    <div>With Hoverable</div>
    <br />
    <Card
      layout="circle"
      isHoverable
    />
  </div>
  
  <div>
    <div>With Clickable</div>
    <br />
    <Card
      layout="circle"
      isClickable
      onClick={() => { alert('Card Clicked'); }}
    />
  </div>
</div>
```
