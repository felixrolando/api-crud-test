import { Service } from 'typedi';
import ClientRepository from '../../repository/ClientRepository';
import { IClient } from '../../interfaces/IClient';

@Service()
export class UpdateClientService {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(client: IClient, clientId: number): Promise<IClient> {

        const clientData: IClient = {
            email: client.email,
            name: client.name,
            phone: client.phone

        }
        return await this.clientRepository.update(clientData, clientId)
    }
}