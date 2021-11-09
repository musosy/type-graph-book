import AuthorModel from '../schemas/Author.schema';

const AuthorRepository = {
    findAll: async () => {
        try {
            const authors = await AuthorModel.find();
            return authors
        } catch(err) {
            console.log(err)
        }
    },
    findOne: async (id: string) => {
        try {
            return await AuthorModel.findById(id)
        } catch(err) {
            console.log(err)
        }
    }
    ,
    addOne: async (firstname: string, lastname: string) => {
        try {
            return await AuthorModel.create({
                firstname,
                lastname
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export default AuthorRepository;