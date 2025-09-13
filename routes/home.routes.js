import express from 'express';
import {Router} from 'express';
export const homeRouter = new Router();
import { homeView , generatePdf } from '../controllers/homeController.js';
homeRouter.get('/' , homeView);
homeRouter.get('/download' , generatePdf);