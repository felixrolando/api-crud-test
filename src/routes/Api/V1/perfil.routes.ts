import { Router } from 'express';
import Container from 'typedi';
import { PerfilController } from '../../../controllers/PerfilController';

const router = Router()
const perfil = Container.get(PerfilController)

router.route('/perfil')
    .get((req, res) => perfil.listPerfil(req, res))
    .post((req, res) => perfil.createPerfil(req, res))

router.put('/perfil/:id', (req, res) => perfil.updatePerfil(req, res))
router.delete('/perfil/:id', (req, res) => perfil.deletePerfil(req, res))
export default router