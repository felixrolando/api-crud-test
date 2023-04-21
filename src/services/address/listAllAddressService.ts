import { Service } from 'typedi';
import AddressRepository from '../../repository/AddressRepository';
import { IAddress } from '../../interfaces/IAddress';

@Service()
export class ListAllAddressService {
    private readonly addressRepository: AddressRepository;

    constructor(addressRepository: AddressRepository) {
        this.addressRepository = addressRepository;
    }

    async execute(): Promise<IAddress[]> {
        return await this.addressRepository.listAll();
    }
}