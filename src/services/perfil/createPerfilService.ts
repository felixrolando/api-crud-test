import { Service } from 'typedi';
import PerfilRepository from '../../repository/PerfilRepository';
import { IPerfil } from '../../interfaces/IPerfil';

@Service()
export class CreatePerfilService {
    private readonly perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    async execute(perfil: IPerfil): Promise<IPerfil> {

        const perfilData: IPerfil = {
            client_id: perfil.client_id,
            description: perfil.description

        }
        return await this.perfilRepository.create(perfilData)
    }
}