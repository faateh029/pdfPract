import path from 'path';
import pdf from 'pdf-creator-node';
import {options} from '../helpers/options.js';
import {data} from '../helpers/data.js';
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
    let array=[];
    data.forEach(p=>{
        const prod = {
            name:p.name,
            description:p.description,
            quantity:p.quantity,
            unit:p.unit,
            imgurl:p.imgurl
        }
        array.push(prod);
    })
    let subTotal = 0 ;
    array.forEach(i=>{
       subTotal+=i.total;
    })
    const tax = (subTotal*20)/100;
    const grandTotal = subTotal-tax;
    const obj = {
        prodList:array,
        subTotal:subTotal,
        tax,
        gTotal:grandTotal
    }
    const document = {
        html:html,
        data:{
            products:obj
        },
        path:'./docs'+filename
    }
    pdf.create(document , options).then(res=>{
          console.log(res);
    }).catch(error=>{
       console.log(error);
    });
    const filePath = 'http://localhost:3001/docs/'+filename;
    res.render('download' , {
        path:filePath
    })
}