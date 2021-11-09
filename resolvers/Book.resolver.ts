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
    async newBook(
        @Arg("title")   title:   string,
        @Arg("author")  author:  string,
        @Arg("summary") summary: string) {
        try {
            await BookService.create(title, author, summary);
            return 'success';
        } catch(err) {
            return "fail";
        }
    }
    @Mutation(returns => String)
    async deleteBook(@Arg("id") id: string) {
        try {
            await BookService.delete(id)
            return 'success'
        } catch(err) {
            return 'fail'
        }
    }
    @Mutation(returns => Book)
    async updateBook(
        @Arg("id")      id:      string,
        @Arg("title")   title:   string,
        @Arg("author")  author:  string,
        @Arg("summary") summary: string) {
            try {
                return await BookService.update(id, title, author, summary)
            } catch(err) {
                console.log("error")
            }
        }
}

export default BookResolver;