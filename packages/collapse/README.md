#### Pill Usage:

```js
const headers = ['Will this opportunity allow me to work for Sequoia Capital India or across multiple startups?', 'I’ve seen Surge roles advertised on LinkedIn and other job boards. Is this the same thing?', 'How can I track the status of my application?'];
const panes = [
  <div>The Employee One program represents an application for a job at one of our Surge portfolio companies. It does not represent an application for a job at Surge or Sequoia Capital India.</div>,
  <div>We do advertise for these roles on job boards like LinkedIn. These job listings all link back to our website, so yes, these are one and the same thing.</div>,
  <div>You can follow the status of your application through the emails that you receive from Belong. At each stage, they will update you via email on whether you have been shortlisted. And if you have any questions about your application, you can email them at surgesupport@belong.co.</div>,
];

initialState = {
  activeItem: 0,
};

<div className="styleguidist__input-wrap">
  <div>Collapse Without Component</div>
  <br /><br />
  <Collapse
    headers={headers}
    panes={panes}
    activeItem={state.activeItem}
    setActiveItem={(event) => {
      setState({
        activeItem: event,
      });
    }}
  />
</div>
```