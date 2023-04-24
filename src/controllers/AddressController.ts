import { Request, Response } from "express";
import { Service } from "typedi";
import { IAddress } from "../interfaces/IAddress";
import { CreateAddressService } from "../services/address/createAddressService";
import { ListAllAddressService } from "../services/address/listAllAddressService";
import { UpdateAddressService } from "../services/address/updateAddressService";
import { DeleteAddressService } from "../services/address/deleteAddressService";
import { BadRequestError } from "../shared/BadRequestError";


@Service()
export class AddressController {
    constructor(private readonly createAddressService: CreateAddressService,
        private readonly listAllAddressService: ListAllAddressService,
        private readonly updateAddressService: UpdateAddressService,
        private readonly deleteAddressService: DeleteAddressService
    ) {
    }

    async createAddress(req: Request, res: Response): Promise<Response> {
        const { ...data }: IAddress = req.body;

        try {

            if (!data.city || !data.client_id || !data.country || !data.is_default || !data.street) {
                throw new BadRequestError('City,Client id, Country, is Defaul and street are required');
            }

            const clientCreated = await this.createAddressService.execute(data);

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

    async listAddress(req: Request, res: Response): Promise<Response> {
        const allAddress = await this.listAllAddressService.execute();
        return res.json(allAddress);
    }

    async updateAddress(req: Request, res: Response): Promise<Response> {
        try {

            const { ...data }: IAddress = req.body;

            const addressId = Number(req.params.id);
            const address = await this.updateAddressService.execute(data, addressId);
            return res.json(address);

        } catch (error) {
            if (error instanceof BadRequestError) {
                return res.status(400).json({ error: error.message });
            } else {
                console.error(error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        }

    }

    async deleteAddress(req: Request, res: Response): Promise<Response> {
        const addressId = Number(req.params.id);
        const status = await this.deleteAddressService.execute(addressId);
        return res.json(status);
    }
}