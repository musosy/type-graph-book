import AuthorModel from '../schemas/Author.schema';
import BookModel from '../schemas/Book.schema';

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
    },
    updateOne: async(id: string, firstname: string, lastname: string) => {
        try {
            const author = await AuthorModel.findById(id);
            author.firstname = firstname;
            author.lastname  = lastname;
            author.save();
            return author;
        } catch(err) {
            console.log(err)
        }
    },
    deleteOne: async (id: string) => {
        try {
            await BookModel.updateMany({ author: id }, { author: null });
            await AuthorModel.deleteOne({ _id: id });
        } catch(err) {
            console.log(err)
        }
    }
}

export default AuthorRepository;