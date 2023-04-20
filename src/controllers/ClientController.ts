import { Request, Response } from "express";
import { Service } from "typedi";
import { CreateClientService } from "../services/client/createClientService";
import { ListAllClientService } from "../services/client/listAllClientService";
import { UpdateClientService } from "../services/client/updateClientService";
import { IClient } from "../interfaces/IClient";
import { DeleteClientService } from "../services/client/deleteClientService";


@Service()
export class ClientController {
    constructor(private readonly createClientService: CreateClientService,
        private readonly listAllClientService: ListAllClientService,
        private readonly updateClientService: UpdateClientService,
        private readonly deleteClientService: DeleteClientService
    ) {
    }

    async createClient(req: Request, res: Response): Promise<Response> {
        const { phone, name, email }: IClient = req.body;

        const clientCreated = await this.createClientService.execute({
            email: email,
            phone: phone,
            name: name,
        });

        return res.json(clientCreated);
    }

    async listClient(req: Request, res: Response): Promise<Response> {
        const allClient = await this.listAllClientService.execute();
        return res.json(allClient);
    }

    async updateClient(req: Request, res: Response): Promise<Response> {
        const { phone, name, email }: IClient = req.body;
        const clientData: IClient = {
            email: email,
            name: name,
            phone: phone

        }
        const clientId = Number(req.params.id);
        const client = await this.updateClientService.execute(clientData, clientId);
        return res.json(client);
    }

    async deleteClient(req: Request, res: Response): Promise<Response> {
        const clientId = Number(req.params.id);
        const status = await this.deleteClientService.execute(clientId);
        return res.json(status);
    }
}