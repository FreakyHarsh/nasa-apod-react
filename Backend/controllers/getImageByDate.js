const fetch = require('node-fetch');

exports.getImageByDate = async (req, res, next) => {
  const date = req.query.date;
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`
  )
    .then((data) => data.json())
    .then((data) => data);
  console.log(response);
  res.json(response);
};
