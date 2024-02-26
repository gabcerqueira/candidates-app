import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from 'src/users/entities/user.entity';
import { AddressService } from 'src/address/address.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private addressService: AddressService,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const newUser: User = {
      email: createUserInput.email,
      name: createUserInput.name,
      addresses: [createUserInput.addressInput],
    };

    const createdUser = await this.userRepository.save(newUser);

    return createdUser;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({
      id: id,
    });

    console.log('q : ', user);

    return user;
  }

  async findByName(name: string) {
    const users = await this.findAll();

    return users.filter((el) => el.name === name);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  getUserAddresses(userId: number) {
    return this.addressService.findByUserId(userId);
  }
}
