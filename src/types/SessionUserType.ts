import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class SessionUserType {

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  token: string;
}