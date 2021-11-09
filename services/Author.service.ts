import AuthorRepository from '../repositories/Author.repository';

const BookService = {
    read:    () => AuthorRepository.findAll(),
    readOne: (id: string) => AuthorRepository.findOne(id),
    create:  (firstname: string, lastname: string) => AuthorRepository.addOne(firstname, lastname),
    update:  (id: string, firstname: string, lastname: string) => AuthorRepository.updateOne(id, firstname, lastname),
    delete:  (id: string) => AuthorRepository.deleteOne(id)
}

export default BookService;