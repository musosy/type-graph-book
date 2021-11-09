import { Arg, Query, Mutation, Resolver } from 'type-graphql';
import Author from '../models/Author.model';
import AuthorService from '../services/Author.service';

@Resolver(Author)
class AuthorResolver {
    @Query(returns => [Author])
    async allAuthors() {
        return await AuthorService.read()
    }
    @Query(returns => Author)
    async oneAuthor(id: string) {
        return await AuthorService.readOne(id)
    }
    @Mutation(returns => String)
    async newAuthor(
        @Arg("firstname") firstname: string,
        @Arg("lastname")  lastname:  string
    ) {
        try {
            await AuthorService.create(firstname, lastname);
            return console.log('success')
        } catch(err) {
            return console.log("failed")
        }
    }
    @Mutation(returns => Author)
    async updateAuthor(
        @Arg("id")        id:        string,
        @Arg("firstname") firstname: string,
        @Arg("lastname")  lastname:  string
    ) {
        try {
            return await AuthorService.update(id, firstname, lastname);
        } catch(err) {
            console.log(err)
        }
    }
    @Mutation(returns => String)
    async deleteAuthor(@Arg("id") id: string) {
        try {
            await AuthorService.delete(id)
            return console.log('success')
        } catch(err) {
            return console.log(err)
        }
    }
}

export default AuthorResolver;