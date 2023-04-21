import { Service } from 'typedi';
import PerfilRepository from '../../repository/PerfilRepository';


@Service()
export class DeletePerfilService {
    private readonly perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    async execute(perfilId: number): Promise<boolean> {
        return await this.perfilRepository.delete(perfilId)
    }
}