import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import {v4 as uuid} from 'uuid';
const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);
app.use('/',router);
app.listen(PORT,()=>console.log(`server is running on ${PORT}`));

DefaultData();
