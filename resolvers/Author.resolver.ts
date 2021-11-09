import { Arg, Query, Mutation, Resolver } from 'type-graphql';
import Author from '../models/Author.model';
import AuthorService from '../services/Author.service';

@Resolver(Author)
class AuthorResolver {
    @Query(returns => [Author])
    async allAuthors() {
        return await AuthorService.read()
    }

    @Mutation(returns => String)
    async newAuthor(@Arg("firstname") firstname: string, @Arg("lastname") lastname: string) {
        try {
            await AuthorService.create(firstname, lastname);
            return console.log('success')
        } catch(err) {
            return console.log("failed")
        }
    }
}

export default AuthorResolver;