#### Basic Tabbed Usage:

```js
const headers = ['First', 'Second', 'Third'];
const panes = [
  <div style={{ margin: '20px 50px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>,
  <div style={{ margin: '20px 50px' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going.</div>,
  <div style={{ margin: '20px 50px' }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
];

initialState = {
  activeTabIndex: 0,
};

<div className="styleguidist__btns-wrap">
  <p>Horizontal Top Tabs</p>
  <br />
  <Tabbed
    headers={headers}
    panes={panes}
    activeTabIndex={state.activeTabIndex}
    onActiveTabChange={(event) => {
      setState({ activeTabIndex: event });
    }}
  />
  <br /><br />
  <p>Horizontal Bottom Tabs</p>
  <br />
  <Tabbed
    headers={headers}
    panes={panes}
    layout="horizontalBottom"
    activeTabIndex={state.activeTabIndex}
    onActiveTabChange={(event) => {
      setState({ activeTabIndex: event });
    }}
  />
  <br /><br />
  <p>Vertical Left Tabs</p>
  <br />
  <Tabbed
    headers={headers}
    panes={panes}
    layout="verticalLeft"
    activeTabIndex={state.activeTabIndex}
    onActiveTabChange={(event) => {
      setState({ activeTabIndex: event });
    }}
  />
  <br /><br />
  <p>Vertical Right Tabs</p>
  <br />
  <Tabbed
    headers={headers}
    panes={panes}
    layout="verticalRight"
    activeTabIndex={state.activeTabIndex}
    onActiveTabChange={(event) => {
      setState({ activeTabIndex: event });
    }}
  />
</div>
```
