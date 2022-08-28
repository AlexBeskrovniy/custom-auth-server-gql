// import { queries } from './queries/index.mjs';
// import { mutations } from './mutations/index.mjs';

export const resolvers = {
    Query: {
        async login(_, {input}, ctx) {
            return await ctx.findOne({ input });
        }
    },

    Mutation: {
        newUser(_, {input}, ctx) {
            return ctx.create({ input });
        }
    }
}