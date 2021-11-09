import BookRepository from '../repositories/Book.repository';

const BookService = {
    read:    () => BookRepository.findAll(),
    readOne: (id: string) => BookRepository.findOne(id),
    create:  (title: string, author: string, summary: string) => BookRepository.addOne(title, author, summary)
}

export default BookService;