import { Service } from 'typedi';
import PerfilRepository from '../../repository/PerfilRepository';
import { IPerfil } from '../../interfaces/IPerfil';

@Service()
export class UpdatePerfilService {
    private readonly perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }
    async execute(perfil: IPerfil, perfilId: number): Promise<IPerfil> {

        const perfilData: IPerfil = {
            client_id: perfil.client_id,
            description: perfil.description

        }
        return await this.perfilRepository.update(perfilData, perfilId)
    }
}