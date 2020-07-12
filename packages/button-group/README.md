#### Basic Button Group Usage:

```js
initialState = {
  grouped: [
    { key: 1, title: 'First' },
    { key: 2, title: 'Second' },
    { key: 3, title: 'Third' },
  ],
  activeIndex: 0,
};

<div className="styleguidist__btns-wrap">
  <p>Text Button</p>
  <br />
  <ButtonGroup
    variant="text"
    panes={state.grouped}
    activeIndex={state.activeIndex}
    onClick={(event) => {
      setState({
        activeIndex: event.active,
      });
    }}
  />
  <br /><br />
  <p>Outlined Button</p>
  <br />
  <ButtonGroup
    variant="outlined"
    panes={state.grouped}
    activeIndex={state.activeIndex}
    onClick={(event) => {
      setState({
        activeIndex: event.active,
      });
    }}
  />
  <br /><br />
  <p>Contained Button</p>
  <br />
  <ButtonGroup
    panes={state.grouped}
    activeIndex={state.activeIndex}
    onClick={(event) => {
      setState({
        activeIndex: event.active,
      });
    }}
  />
</div>
```
