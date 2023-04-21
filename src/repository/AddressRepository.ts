import { Service } from 'typedi';
import { ICrud } from '../interfaces/ICrud';
import { IAddress } from '../interfaces/IAddress';
import { Address } from '../models/address';

@Service()
class AddressRepository implements ICrud<IAddress> {

    async listAll(): Promise<IAddress[]> {
        return await Address.find();
    }

    async create(data: IAddress): Promise<IAddress> {
        const address = new Address();
        address.country = data.country;
        address.city = data.city;
        address.street = data.street;

        if (data.zip_code !== null && data.zip_code !== undefined) {
            address.zip_code = data.zip_code;
        }
        address.is_default = data.is_default;
        address.client_id = data.client_id;
        return await address.save();
    }

    async update(data: IAddress, addressId: number): Promise<IAddress> {
        const address = await Address.save({
            id: addressId,
            ...data
        })
        return address;
    }

    async delete(addressId: number): Promise<boolean> {
        const address = await Address.findOneBy({
            id: addressId
        });

        if (address) {
            address.remove();
            return true;
        }

        return false;
    }
}

export default AddressRepository