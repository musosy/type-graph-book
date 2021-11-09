import BookModel from '../schemas/Book.schema';
import AuthorRepository from '../repositories/Author.repository';

const BookRepository = {
    findAll: async () => {
        try {
            return await BookModel.find();
        } catch(err) {
            console.log(err)
        }
    },
    findOne: async (id: string) => {
        try {
            const book = await BookModel.findById(id)
            const author = await AuthorRepository.findOne(book.author)
            book.author = author
            return book
        } catch(err) {
            console.log(err)
        }
    },
    addOne: async (title: string, authorId: string, summary: string = "") => {
        try {
            const author = await AuthorRepository.findOne(authorId)
            console.log(author)
            return await BookModel.create({
                title,
                author,
                summary
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export default BookRepository;