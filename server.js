import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import path from 'path';
import fs from 'fs';
import App from './src/App';

const app = express();

app.use(
  express.static("./build", {
    index:false,
  })
);

console.log(App);
app.get("/*", (req, res) => {
  const reactApp = renderToString(
        <StaticRouter>
            <App />
        </StaticRouter>
    //<div>asd</div>
  );

  return res.send(
    `<html>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>
        `
  );
});

app.listen(8879, () => {
  console.log("Server is rundning");
});
