import { Resolver, Query } from "type-graphql";
import { User } from "../models/User"

@Resolver()
export class UserResolver {
    @Query(() => [User])
    Users() {
        return User.find()
    };
}