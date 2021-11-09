import BookModel from '../schemas/Book.schema';
import AuthorRepository from '../repositories/Author.repository';

const BookRepository = {
    findAll: async () => {
        try {
            const books = await BookModel.find();
            return books.map(async book => {
                const author = await AuthorRepository.findOne(book.author)
                book.author = author;
                return book;
            })
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
            return await BookModel.create({
                title,
                author,
                summary
            })
        } catch(err) {
            console.log(err)
        }
    },
    deleteOne: async (id: string) => {
        try {
            return await BookModel.deleteOne({ _id: id })
        } catch(err) {
            console.log(err)
        }
    },
    updateOne: async (id: string, title: string, authorId: string, summary: string) => {
        try {
            const book = await BookModel.findById(id);
            book.title   = title;
            book.author  = authorId;
            book.summary = summary;
            await book.save();
            const author = await AuthorRepository.findOne(authorId);
            book.author = author;
            return book;
        } catch(err) {
            console.log(err)
        }
    }
}

export default BookRepository;