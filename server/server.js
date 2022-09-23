// my-server.js
import { handler } from './out/handler.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('combined'));

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});