import { Service } from 'typedi';
import AddressRepository from '../../repository/AddressRepository';

@Service()
export class DeleteAddressService {
    private readonly addressRepository: AddressRepository;

    constructor(addressRepository: AddressRepository) {
        this.addressRepository = addressRepository;
    }

    async execute(perfilId: number): Promise<boolean> {
        return await this.addressRepository.delete(perfilId)
    }
}