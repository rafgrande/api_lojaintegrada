import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { compare, hash } from "bcryptjs";
import { CreateUserInput } from "../inputs/CreateUserInput";
import { User } from "../models/User"
import { CreateSessionInput } from "../inputs/CreateSessionInput";

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

    @Mutation(() => User)
    async createSession(@Arg("data") data: CreateSessionInput){
        const { email, password } = data;
        const user = await User.findOne({ where: { email } });
        
        if(!user) throw new Error("Incorrect email/password combination.");
        const passwordConfirmed = await compare(password, user.password);
        
        if(!passwordConfirmed) {
            throw new Error("Incorrect email/password combination.");
        }
            
        return user;
    }

}