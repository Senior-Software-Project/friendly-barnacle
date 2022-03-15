/* Code is based on material presented in Pluralsight course, "Play by Play: Building a Node Web API with Sam Artioli and John Papa" at:
        https://app.pluralsight.com/library/courses/play-by-play-node-web-api-john-papa-sam-artioli/table-of-contents (subscription req'd)
*/      

import express from 'express';
import bodyParser from 'body-parser';

const app = express()

const hostname = '127.0.0.1'
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

import userStats from './user-stats.js';

var stats = userStats(app);

/*
app.get('/', (req, res) => {
  res.send('Hello World!');
  //res.json('hello: world');
});
*/

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

/*
import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
