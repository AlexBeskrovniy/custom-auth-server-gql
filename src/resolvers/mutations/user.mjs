const userMutations = {
    Mutation: {
        newUser(_, {input}, ctx) {
            return ctx.model.create({ input });
        }
    }
}

export default userMutations;