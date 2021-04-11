import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { hash } from "bcryptjs";
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
        const { name, email, password } = data;
        const userExists = await User.findOne({ where: { email } });
        
        if(userExists) throw new Error("Usuário já foi cadastrado");

        const hashedPassword = await hash(password, 8);
        
        const user = User.create({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        return user;
    }

}