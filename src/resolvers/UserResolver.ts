import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateUserInput } from "../inputs/CreateUserInput";
import { User } from "../models/User"

@Resolver()
export class UserResolver {
    @Query(() => [User])
    Users() {
        return User.find()
    };

    @Mutation(() => User)
    async createUser(@Arg("data") data: CreateUserInput){
        const { email } = data;
        const userExists = await User.findOne({ where: { email } });
        
        if(userExists) throw new Error("Usuário já foi cadastrado");

        const user = User.create(data);
        await user.save();

        return user;
    }

}