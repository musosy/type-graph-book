import { Arg, Query, Mutation, Resolver } from 'type-graphql';
import Book from '../models/Book.model';
import BookService from '../services/Book.service';

@Resolver(Book)
class BookResolver {
    @Query(returns => [Book])
    async allBooks() {
        return await BookService.read()
    }
    @Query(returns => Book) 
    async oneBook(@Arg("id") id: string){
        return await BookService.readOne(id)
    }
    @Mutation(returns => String)
    async newBook(@Arg("title") title: string, @Arg("author") author: string, @Arg("summary") summary: string) {
        try {
            await BookService.create(title, author, summary);
            return 'success';
        } catch(err) {
            return "fail";
        }
    }
}

export default BookResolver;