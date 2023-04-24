import { Service } from 'typedi';
import { Client } from '../models/client';
import { IClient } from '../interfaces/IClient';
import { ICrud } from '../interfaces/ICrud';

@Service()
class ClientRepository implements ICrud<IClient> {

    async findById(clientId: number): Promise<Client | null> {
        const client = await Client.findOneBy({
            id: clientId
        });

        if (client) {
            return client;
        }

        return null;
    }

    async listAll(): Promise<IClient[]> {
        return await Client.find();
    }

    async create(data: IClient): Promise<IClient> {
        const client = new Client();
        client.email = data.email;
        client.first_name = data.first_name;
        client.last_name = data.last_name;
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
        const client = await this.findById(clientId)

        if (client) {
            client.remove();
            return true;
        }

        return false;
    }
}

export default ClientRepository