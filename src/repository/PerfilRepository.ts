import { Service } from 'typedi';
import { ICrud } from '../interfaces/ICrud';
import { IPerfil } from '../interfaces/IPerfil';
import { Perfil } from '../models/perfil';

@Service()
class PerfilRepository implements ICrud<IPerfil> {

    async findById(perfilId: number): Promise<Perfil | null> {
        const perfil = await Perfil.findOneBy({
            id: perfilId
        });

        if (perfil) {
            return perfil;
        }
        return null;
    }

    async listAll(): Promise<IPerfil[]> {
        return await Perfil.find();
    }

    async create(data: IPerfil): Promise<IPerfil> {
        const perfil = new Perfil();
        if (data.client_id !== undefined) {
            perfil.client_id = data.client_id;
        }
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
        const perfil = await this.findById(perfilId);

        if (perfil) {
            perfil.remove();
            return true;
        }

        return false;
    }
}

export default PerfilRepository