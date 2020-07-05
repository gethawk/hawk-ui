#### Pill Usage:

```js
initialState = {
  items1: [
    {
      title: 'Will this opportunity allow me to work for Sequoia Capital India or across multiple startups?',
      content: 'The Employee One program represents an application for a job at one of our Surge portfolio companies. It does not represent an application for a job at Surge or Sequoia Capital India.',
    },
    {
      title: 'I’ve seen Surge roles advertised on LinkedIn and other job boards. Is this the same thing?',
      content: 'We do advertise for these roles on job boards like LinkedIn. These job listings all link back to our website, so yes, these are one and the same thing.',
    },
    {
      title: 'How can I track the status of my application?',
      content: 'You can follow the status of your application through the emails that you receive from Belong. At each stage, they will update you via email on whether you have been shortlisted. And if you have any questions about your application, you can email them at surgesupport@belong.co.',
    }
  ],
  items2: [
    {
      title: 'Button Component',
      content: <Button>First</Button>,
    },
    {
      title: 'Input Component',
      content: <Button>First</Button>,
    },
  ],
  activeItem: 2,
};

<div className="styleguidist__input-wrap">
  <div>Collapse Without Component</div>
  <br /><br />
  <Collapse
    items={state.items1}
    activeItem={state.activeItem}
    setActiveItem={(event) => {
      setState({
        activeItem: event,
      });
    }}
  />
  <br />
  <div>Collapse With Component</div>
  <br /><br />
  <Collapse
    items={state.items2}
    activeItem={state.activeItem}
    setActiveItem={(event) => {
      setState({
        activeItem: event,
      });
    }}
  />
</div>
```