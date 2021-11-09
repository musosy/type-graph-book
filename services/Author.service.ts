import AuthorRepository from '../repositories/Author.repository';

const BookService = {
    read: () => {
        return AuthorRepository.findAll();
    },
    create: (firstname: string, lastname: string) => {
        return AuthorRepository.addOne(firstname, lastname)
    }
}

export default BookService;