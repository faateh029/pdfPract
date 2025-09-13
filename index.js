import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Create __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = new express();
app.use(expressLayouts);
app.set('view-engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public'))) ;
app.listen(3000,()=>{
   console.log("server running on port 3000");
})