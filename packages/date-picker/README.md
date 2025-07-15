## Installation


#### To install a component run
`$ npm install @hawk-ui/date-picker --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/date-picker/dist/index.min.css
```


## Usage


#### Single Date Selector
[Demo](https://hawk.oncrypt.co/#!/DatePicker/1)
```js static
import DatePicker from '@hawk-ui/date-picker';
```
```js
const moment = require('moment');
initialState = {
  selectedDate: moment('2020-07-24T06:30:00.000Z'),
};

<DatePicker
  onChange={(value) => {
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


#### With Placeholder
[Demo](https://hawk.oncrypt.co/#!/DatePicker/2)
```js static
import DatePicker from '@hawk-ui/date-picker';
```
```js
const moment = require('moment');
initialState = {
  selectedDate: null,
};

<DatePicker
  onChange={(value) => {
    setState({
      selectedDate: value,
    });
  }}
  renderInput={() =>
    !state.selectedDate
      ? 'Select Date'
      : moment(state.selectedDate).format('DD MMM YYYY')
  }
  value={{
    startMoment: state.selectedDate,
  }}
/>
```


#### Range Date Selector
[Demo](https://hawk.oncrypt.co/#!/DatePicker/3)
```js static
import DatePicker from '@hawk-ui/date-picker';
```
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
        const updatedEndDate =
          !state.endDate || moment(state.endDate).isBefore(moment(value), 'days')
            ? value
            : null;

        setState({
          startDate: value,
          ...(updatedEndDate ? { endDate: updatedEndDate } : {}),
        });
      }}
      isDayBlocked={(day) => (day.isBefore(moment(), 'days'))}
      renderInput={() =>
        !state.startDate
          ? 'Start Date'
          : moment(state.startDate).format('DD MMM YYYY')
      }
      value={{
        startMoment: state.startDate,
      }}
    />
  </div>

  <div style={{ width: '100%', marginLeft: '10px' }}>
    <DatePicker
      onChange={(value) => {
        setState({
          endDate: value,
        });
      }}
      isDayBlocked={(day) =>
        day.isBefore(state.startDate ? moment(state.startDate) : moment(), 'day')
      }
      renderInput={() =>
        !state.endDate
          ? 'End Date'
          : moment(state.endDate).format('DD MMM YYYY')
      }
      value={{
        startMoment: state.endDate,
      }}
    />
  </div>
</div>
```
