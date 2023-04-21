import express from 'express';
import clientRouter from './client.routes'
import addressRouter from './address.routes'
import perfilRouter from './perfil.routes'

const indexRouterV1 = express.Router()

indexRouterV1.use(clientRouter);
indexRouterV1.use(addressRouter);
perfilRouter.use(perfilRouter);

export default indexRouterV1;