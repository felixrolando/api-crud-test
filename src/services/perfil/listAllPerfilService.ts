import { Service } from 'typedi';
import PerfilRepository from '../../repository/PerfilRepository';
import { IPerfil } from '../../interfaces/IPerfil';

@Service()
export class ListAllPerfilService {
    private readonly perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    async execute(): Promise<IPerfil[]> {
        return await this.perfilRepository.listAll();
    }
}