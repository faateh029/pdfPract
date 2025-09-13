import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import {homeRouter} from './routes/home.routes.js';

// Create __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = new express();
app.set('view engine' , 'ejs');
app.use(expressLayouts);

app.use(express.static(path.join(__dirname , 'public'))) ;
app.use('/docs' , express.static(path.join(__dirname , 'docs')));
app.use('/', homeRouter);

app.listen(3001,()=>{
   console.log("server running on port 3001");
})