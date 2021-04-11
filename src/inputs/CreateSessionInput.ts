import { InputType, Field } from "type-graphql";

@InputType()
export class CreateSessionInput {

  @Field()
  email!: string;

  @Field()
  password!: string;
}