import { Service } from 'typedi';
import AddressRepository from '../../repository/AddressRepository';
import { IAddress } from '../../interfaces/IAddress';

@Service()
export class UpdateAddressService {
    private readonly addressRepository: AddressRepository;

    constructor(addressRepository: AddressRepository) {
        this.addressRepository = addressRepository;
    }
    async execute(address: IAddress, addressId: number): Promise<IAddress> {

        const addressData: IAddress = {
            client_id: address.client_id,
            country: address.country,
            city: address.city,
            zip_code: address.zip_code,
            is_default: address.is_default,
            street: address.street

        }
        return await this.addressRepository.update(addressData, addressId)
    }
}