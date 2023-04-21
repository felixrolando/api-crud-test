import { Request, Response } from "express";
import { Service } from "typedi";
import { CreatePerfilService } from "../services/perfil/createPerfilService";
import { ListAllPerfilService } from "../services/perfil/listAllPerfilService";
import { UpdatePerfilService } from "../services/perfil/updatePerfilService";
import { DeletePerfilService } from "../services/perfil/deletePerfilService";
import { IPerfil } from "../interfaces/IPerfil";


@Service()
export class PerfilController {
    constructor(private readonly createPerfilService: CreatePerfilService,
        private readonly listAllPerfilService: ListAllPerfilService,
        private readonly updatePerfilService: UpdatePerfilService,
        private readonly deletePerfilService: DeletePerfilService
    ) {
    }

    async createPerfil(req: Request, res: Response): Promise<Response> {
        const { ...data }: IPerfil = req.body;

        const clientCreated = await this.createPerfilService.execute(data);

        return res.json(clientCreated);
    }

    async listPerfil(req: Request, res: Response): Promise<Response> {
        const allPerfils = await this.listAllPerfilService.execute();
        return res.json(allPerfils);
    }

    async updatePerfil(req: Request, res: Response): Promise<Response> {
        const { ...data }: IPerfil = req.body;

        const perfilId = Number(req.params.id);
        const perfil = await this.updatePerfilService.execute(data, perfilId);
        return res.json(perfil);
    }

    async deletePerfil(req: Request, res: Response): Promise<Response> {
        const perfilId = Number(req.params.id);
        const status = await this.deletePerfilService.execute(perfilId);
        return res.json(status);
    }
}