import { Service } from 'typedi';
import ClientRepository from '../../repository/ClientRepository';


@Service()
export class DeleteClientService {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(clientId: number): Promise<boolean> {
        return await this.clientRepository.delete(clientId)
    }
}