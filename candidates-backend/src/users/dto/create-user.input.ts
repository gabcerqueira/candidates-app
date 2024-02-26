import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateAddressInput } from 'src/address/dto/create-address.input';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  addressInput: CreateAddressInput;
}
