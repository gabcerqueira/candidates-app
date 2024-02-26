import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'addresses' })
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id?: number;

  @Column()
  @Field()
  street: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'userId' }) // Specify the name of the column used for joining
  @Field(() => User, { nullable: true })
  user?: User;

  @Column({ name: 'userId' }) // Specify the name of the column in the database
  @Field(() => Int) // Define the field type in GraphQL
  userId?: number;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  postalCode: string;
}
