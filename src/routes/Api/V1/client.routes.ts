import { Router } from 'express';
import Container from 'typedi';
import { ClientController } from '../../../controllers/ClientController';

const router = Router()
const client = Container.get(ClientController)

router.route('/client')
    .get((req, res) => client.listClient(req, res))
    .post((req, res) => client.createClient(req, res))

router.put('/client/:id', (req, res) => client.updateClient(req, res))
router.delete('/client/:id', (req, res) => client.deleteClient(req, res))
export default router