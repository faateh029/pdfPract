import path from 'path';
import pdf from 'pdf-creator-node';
import fs from 'fs';

export const homeView = (req , res)=>{
    res.render('home');
}