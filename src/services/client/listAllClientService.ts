import { Service } from 'typedi';
import ClientRepository from '../../repository/ClientRepository';
import { IClient } from '../../interfaces/IClient';

@Service()
export class ListAllClientService {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(): Promise<IClient[]> {
        return await this.clientRepository.listAll();
    }
}