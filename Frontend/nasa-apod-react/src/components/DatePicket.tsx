import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { formatYmd } from '../utils/formatYmd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);
function DatePicket() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<null | string>(formatYmd(new Date()));
  console.log(selectedDate);
  return (
    <TextField
      id='date'
      label='Date'
      type='date'
      defaultValue={selectedDate}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(event) => {
        const date = event.target.value;
        console.log(date);
        setSelectedDate(date);
      }}
    />
  );
}

export default DatePicket;
