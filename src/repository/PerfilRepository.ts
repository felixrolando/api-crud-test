import { Service } from 'typedi';
import { ICrud } from '../interfaces/ICrud';
import { IPerfil } from '../interfaces/IPerfil';
import { Perfil } from '../models/perfil';

@Service()
class PerfilRepository implements ICrud<IPerfil> {

    async listAll(): Promise<IPerfil[]> {
        return await Perfil.find();
    }

    async create(data: IPerfil): Promise<IPerfil> {
        const perfil = new Perfil();
        perfil.client_id = data.client_id;
        perfil.description = data.description;
        return await perfil.save();
    }

    async update(data: IPerfil, perfilId: number): Promise<IPerfil> {
        const perfil = await Perfil.save({
            id: perfilId,
            ...data
        })
        return perfil;
    }

    async delete(perfilId: number): Promise<boolean> {
        const address = await Perfil.findOneBy({
            id: perfilId
        });

        if (address) {
            address.remove();
            return true;
        }

        return false;
    }
}

export default PerfilRepository