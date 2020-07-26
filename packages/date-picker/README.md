#### Basic Date Picker Usage:

```js
const moment = require('moment');
initialState = {
  selectedDate: moment('2020-07-24T06:30:00.000Z'),
  startDate: null,
  endDate: null,
};

<div className="styleguidist__btns-wrap">
  <p>Single Date Selector</p>
  <br />
  <div>
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
  </div>
  <br /><br />
  <p>Range Date Selector</p>
  <br />
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
</div>
```
