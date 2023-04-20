import express from 'express';
import clientRouter from './client.routes'

const indexRouterV1 = express.Router()

indexRouterV1.use(clientRouter);

export default indexRouterV1;