import express from 'express';
import {Router} from 'express';
export const homeRouter = new Router();
import { homeView } from '../controllers/homeController.js';
homeRouter.get('/' , homeView);