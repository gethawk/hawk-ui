## Installation


#### To install a component run
`$ npm install @hawk-ui/timeline --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/timeline/dist/index.min.css
```


## Usage


#### Timeline
[Demo](https://hawk.oncrypt.co/#!/Timeline/1)
```js static
import Timeline from '@hawk-ui/timeline';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Timeline
    panes={[
      {
        title: 'August 30, 2017',
        content: (
          <span>My first YouTube video was a tutorial on how to build a client-server sockets app in Java.</span>
        ),
      },
      {
        title: 'February 25, 2019',
        content: (
          <div>
            <p>To celebrate 5,000 subscribers, I published a video answering some of the most popular questions which my viewers had asked me since starting my YouTube channel.</p>
            <p>I didn't even remove the jumper in the background before recording that video</p>
          </div>
        ),
      },
      {
        title: 'June 3, 2020',
        content: (
          <span>In my first ever live stream, I couldn't put my cup of coffee down.</span>
        ),
      },
      {
        title: 'June 28, 2021',
        content: (
          <div>
            <span>Published this video.</span>
            <span>Link to code in description</span>
          </div>
        ),
      },
    ]}
  />
</div>
```