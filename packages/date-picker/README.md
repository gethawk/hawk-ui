## Installation
`$ npm install @hawk-ui/date-picker --save`


## Usage


#### Single Date Selector
[Demo](https://hawk.wallnit.com/#!/DatePicker/1)
```js
const moment = require('moment');
initialState = {
  selectedDate: moment('2020-07-24T06:30:00.000Z'),
};

<DatePicker
  onChange={(value) => {
    console.log('query value', moment(value).set(null).toISOString());
    setState({
      selectedDate: value,
    });
  }}
  renderInput={() => (
    !state.selectedDate ? <span>Start Date</span> : state.selectedDate
  )}
  value={{
    startMoment: state.selectedDate,
  }}
/>
```


#### Range Date Selector
[Demo](https://hawk.wallnit.com/#!/DatePicker/3)
```js
const moment = require('moment');
initialState = {
  startDate: null,
  endDate: null,
};

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div style={{ width: '100%', marginRight: '10px' }}>
    <DatePicker
      onChange={(value) => {
        const updatedEndDate = !state.endDate || moment(state.endDate).isBefore(moment(value), 'days') ? value : null;

        setState({
          startDate: value,
          ...(updatedEndDate ? { endDate: updatedEndDate } : {}),
        });
      }}
      isDayBlocked={(day) => (day.isBefore(moment(), 'days'))}
      renderInput={() => (
        !state.startDate ? <span>Start Date</span> : state.startDate
      )}
      value={{
        startMoment: state.startDate,
      }}
    />
  </div>

  <div style={{ width: '100%', marginLeft: '10px' }}>
    <DatePicker
      onChange={(value) => {
        console.log('query value', moment(value).set(null).toISOString());
        setState({
          endDate: value,
        });
      }}
      isDayBlocked={(day) => (
        day.isBefore(state.startDate ? moment(state.startDate) : moment(), 'days')
      )}
      renderInput={() => (
        !state.endDate ? <span>End Date</span> : state.endDate
      )}
      value={{
        startMoment: state.endDate,
      }}
    />
  </div>
</div>
```
