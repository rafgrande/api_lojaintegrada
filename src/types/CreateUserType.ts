
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateUserType {

  @Field()
  email: string;
}