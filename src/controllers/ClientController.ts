import { Request, Response } from "express";
import { Service } from "typedi";
import { CreateClientService } from "../services/client/createClientService";
import { ListAllClientService } from "../services/client/listAllClientService";
import { UpdateClientService } from "../services/client/updateClientService";
import { IClient } from "../interfaces/IClient";
import { DeleteClientService } from "../services/client/deleteClientService";
import { BadRequestError } from "../shared/BadRequestError";


@Service()
export class ClientController {
    constructor(private readonly createClientService: CreateClientService,
        private readonly listAllClientService: ListAllClientService,
        private readonly updateClientService: UpdateClientService,
        private readonly deleteClientService: DeleteClientService
    ) {
    }

    async createClient(req: Request, res: Response): Promise<Response> {

        try {
            const { ...data }: IClient = req.body;

            if (!data.email || !data.first_name || !data.last_name || !data.phone) {
                throw new BadRequestError('Email,First name, Last name and phone are required');
            }

            const clientCreated = await this.createClientService.execute(data);

            return res.json(clientCreated);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return res.status(400).json({ error: error.message });
            } else {
                console.error(error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        }


    }

    async listClient(req: Request, res: Response): Promise<Response> {
        const allClient = await this.listAllClientService.execute();
        return res.json(allClient);
    }

    async updateClient(req: Request, res: Response): Promise<Response> {

        try {
            const { ...data }: IClient = req.body;

            const clientId = Number(req.params.id);
            const client = await this.updateClientService.execute(data, clientId);
            return res.json(client);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return res.status(400).json({ error: error.message });
            } else {
                console.error(error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        }


    }

    async deleteClient(req: Request, res: Response): Promise<Response> {
        const clientId = Number(req.params.id);
        const status = await this.deleteClientService.execute(clientId);
        return res.json(status);
    }
}