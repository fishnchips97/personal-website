import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get([
  '/',
  '/resume',
  '/projects',
  '/projects/pacr/',
  '/projects/pacr/privacy_policy',
  '/projects/personal_website'
], (req, res) => {
  // const app = ReactDOMServer.renderToString(<App />);

  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  // console.log(markup)

  // if (context.url) {
  //   // Somewhere a `<Redirect>` was rendered
  //   redirect(301, context.url);
  // } else {
  //   // we're good, send the response
  // }

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    );
  });
});

app.use(function (req, res, next) {
  res.status(404).send('<h1>Sorry can\'t find that!</h1> <h2>Error 404</h2>')
})

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
