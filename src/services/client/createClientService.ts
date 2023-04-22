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
            first_name: client.first_name,
            last_name: client.last_name,
            phone: client.phone

        }
        return await this.clientRepository.create(clientData)
    }
}