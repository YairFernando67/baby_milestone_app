const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
<<<<<<< HEAD
  const webpackMiddleware = require('webpack-dev-middleware'); 
  const webpack = require('webpack'); 
  const webpackConfig = require('./webpack.config.js'); 
=======
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
>>>>>>> ef184aac34c148636bd501cfb11269e6a1bc0659
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

<<<<<<< HEAD
app.listen(process.env.PORT || 3050, () => console.log('Listening'));
=======
app.listen(process.env.PORT || 3050, () => console.log("Listening"));
>>>>>>> ef184aac34c148636bd501cfb11269e6a1bc0659
