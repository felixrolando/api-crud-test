import { Service } from 'typedi';
import ClientRepository from '../../repository/ClientRepository';
import { IClient } from '../../interfaces/IClient';

@Service()
export class CreateClientService {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(client: IClient): Promise<IClient> {

        const clientData: IClient = {
            email: client.email,
            name: client.name,
            phone: client.phone

        }
        return await this.clientRepository.create(clientData)
    }
}