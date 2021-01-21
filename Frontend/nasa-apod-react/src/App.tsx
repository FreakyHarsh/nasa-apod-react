import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DatePicket from './components/DatePicket';
import { formatYmd } from './utils/formatYmd';

const useStyles = makeStyles({
  appbar: {
    backgroundColor: '#1D3A8F',
    color: '#FFFFFF',
  },
});
function App() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<null | string>(formatYmd(new Date()));
  const [data, setData]: any = useState();

  useEffect(() => {
    const getData = async () => {
      const post = await fetch(`https://nasa-apod-backend.herokuapp.com/image?date=${selectedDate}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error));
      setData(post);
    };
    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [selectedDate]);
  return (
    <div>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        className={classes.appbar}
        px={2}
        py={1}
      >
        <Typography variant='h5' component='h2'>
          ACME
        </Typography>
        <DatePicket clicked={(date: string) => setSelectedDate(date)} />
      </Box>
      {data ? (
        <Container maxWidth='sm'>
          <Box my={3}>
            <Card>
              <CardHeader title={data.title} />
              <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={data.url}
                title={`Copyright: ${data.copyright}`}
              />
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {data.explanation}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      ) : (
        <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
