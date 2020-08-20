## Installation
`$ npm install @hawk-ui/card --save`


## Usage


#### Box Card
[Demo]()
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
[Demo]()
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
