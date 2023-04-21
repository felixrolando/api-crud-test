import { Router } from 'express';
import Container from 'typedi';
import { AddressController } from '../../../controllers/AddressController';

const router = Router()
const address = Container.get(AddressController)

router.route('/address')
    .get((req, res) => address.listAddress(req, res))
    .post((req, res) => address.createAddress(req, res))

router.put('/address/:id', (req, res) => address.updateAddress(req, res))
router.delete('/address/:id', (req, res) => address.deleteAddress(req, res))
export default router