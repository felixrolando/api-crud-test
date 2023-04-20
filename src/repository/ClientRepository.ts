import { Service } from 'typedi';
import { Client } from '../models/client';
import { IClient } from '../interfaces/IClient';

@Service()
class ClientRepository {

    async listAll(): Promise<IClient[]> {
        return await Client.find();
    }

    async create(data: IClient): Promise<IClient> {
        const client = new Client();
        client.email = data.email;
        client.name = data.name;
        client.phone = data.phone;
        return await client.save();
    }

    async update(data: IClient, clientId: number): Promise<IClient> {
        const client = await Client.save({
            id: clientId,
            ...data
        })
        return client;
    }

    async delete(clientId: number): Promise<boolean> {
        const client = await Client.findOneBy({
            id: clientId
        });

        if (client) {
            client.remove();
            return true;
        }

        return false;
    }
}

export default ClientRepository