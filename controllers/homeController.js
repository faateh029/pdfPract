import path from 'path';
import pdf from 'pdf-creator-node';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
// Create __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const homeView = (req , res)=>{
    res.render('home');
}

export const generatePdf = (req , res , next)=>{
    const html = fs.readFileSync(__dirname , "../views/templates.html" , "utf-8");
    const filename = Math.random()+'_doc' + '.pdf';
}