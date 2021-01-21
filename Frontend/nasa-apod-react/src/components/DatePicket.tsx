import React from 'react';
import TextField from '@material-ui/core/TextField';
import { formatYmd } from '../utils/formatYmd';

function DatePicket({ clicked }: any) {
  const [selectedDate, setSelectedDate] = React.useState<null | string>(formatYmd(new Date()));
  return (
    <TextField
      id='date'
      style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}
      type='date'
      defaultValue={selectedDate}
      onChange={(event) => {
        const date = event.target.value;
        setSelectedDate(date);
        clicked(date);
      }}
      InputProps={{ inputProps: { max: formatYmd(new Date()) } }}
    />
  );
}

export default DatePicket;
