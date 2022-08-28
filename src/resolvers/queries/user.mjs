const userQueries = {
    Query: {
        login(_, {input}, ctx) {
            const email = input.email;
            return ctx.model.findOne({ email });
        }
    }
}

export default userQueries;