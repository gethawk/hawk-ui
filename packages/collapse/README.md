#### Pill Usage:

```js
initialState = {
  items: [
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
  activeItem: 2,
};

<div className="styleguidist__input-wrap">
  <Collapse
    items={state.items}
    activeItem={state.activeItem}
    setActiveItem={(event) => {
      setState({
        activeItem: event,
      });
    }}
  />
</div>
```