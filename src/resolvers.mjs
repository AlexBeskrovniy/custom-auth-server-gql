import { ApolloError } from "apollo-server-errors";
import { hashData, generateJWT } from './helpers.mjs';

export const resolvers = {
    Query: {
        async login(_, {input}, ctx) {
            return await ctx.User.findOne(input);
        }
    },

    Mutation: {
        async newUser(_, {input: { name, login, email, password }}, ctx) {
            const existedUser = await ctx.User.findOne({ email:email });

            if (existedUser) {
                throw new ApolloError('User has already exist', 'USER_ALREADY_EXIST');
            }

            const hashedPassword = await hashData(password);

            const user = await ctx.User.create({
                name,
                login,
                email,
                password: hashedPassword   
            });

            const token = generateJWT(user._id);
            user.token = token;

            return user;
        }
    }
}