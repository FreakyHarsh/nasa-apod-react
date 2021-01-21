# Backend

You can fetch the images using the given url and  
date format: `YYYY-MM-DD `

###### FOR DEVELOPMENT

```
GET: http://localhost:8080/image?date=2020-02-11
```

###### FOR PRODUCTION

`https://nasa-apod-backend.herokuapp.com/image?date=2020-09-09`

For using this project: use your own [API KEY](https://api.nasa.gov/) and place it inside controllers/getImageByDate.js
