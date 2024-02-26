import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RoleEnum } from '../enums/RoleEnum';
import { Address } from 'src/address/entities/address.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id?: number;

  @Column()
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ nullable: true, default: RoleEnum.default }) // Make the role column nullable if it's optional
  @Field(() => String, { nullable: true }) // Define the field type as RoleEnum and mark it as nullable
  role?: RoleEnum;

  @OneToMany(() => Address, (address) => address.user, {
    cascade: ['insert'],
  })
  @JoinColumn()
  @Field(() => [Address], { nullable: true })
  addresses?: Address[];
}
