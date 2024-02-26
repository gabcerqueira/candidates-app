import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(createAddressInput: CreateAddressInput) {
    const address: Address = {
      ...createAddressInput,
    };

    return await this.addressRepository.save(address);
  }

  async findAll() {
    return await this.addressRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }

  async findByUserId(userId: number) {
    return await this.addressRepository.findBy({
      userId: userId,
    });
  }
}
/*
const addresses = [
      {
        street: 'Street abcde',
        city: 'City fghij',
        state: 'State klmno',
        country: 'Country pqrst',
        postalCode: 'ABCDE',
        userId: 1,
      },
      {
        street: 'Street uvwxy',
        city: 'City z1234',
        state: 'State 56789',
        country: 'Country 0abcd',
        postalCode: 'FGHIJ',
        userId: 2,
      },
      {
        street: 'Street bcdef',
        city: 'City ghijk',
        state: 'State lmnop',
        country: 'Country qrstu',
        postalCode: 'VWXYZ',
        userId: 3,
      },
      {
        street: 'Street 12345',
        city: 'City 67890',
        state: 'State abcde',
        country: 'Country fghij',
        postalCode: 'KLMNO',
        userId: 4,
      },
      {
        street: 'Street pqrst',
        city: 'City uvwxy',
        state: 'State z1234',
        country: 'Country 56789',
        postalCode: 'ABCDE',
        userId: 5,
      },
      {
        street: 'Street 0abcd',
        city: 'City efghi',
        state: 'State jklmn',
        country: 'Country opqrs',
        postalCode: 'TUVWX',
        userId: 6,
      },
      {
        street: 'Street yz123',
        city: 'City 45678',
        state: 'State 90abc',
        country: 'Country defgh',
        postalCode: 'IJKLM',
        userId: 7,
      },
      {
        street: 'Street nopqr',
        city: 'City stuv',
        state: 'State wxyz1',
        country: 'Country 23456',
        postalCode: '7890A',
        userId: 8,
      },
      {
        street: 'Street bcdef',
        city: 'City ghijk',
        state: 'State lmnop',
        country: 'Country qrstu',
        postalCode: 'VWXYZ',
        userId: 9,
      },
      {
        street: 'Street 12345',
        city: 'City 67890',
        state: 'State abcde',
        country: 'Country fghij',
        postalCode: 'KLMNO',
        userId: 10,
      },
    ];

*/
