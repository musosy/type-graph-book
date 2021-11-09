import { ObjectType, Field, ID } from 'type-graphql';
import Author from './Author.model';


@ObjectType()
class Book {
    @Field(type => ID)
    id!: string;

    @Field()
    title!: string;

    @Field()
    summary?: string;

    @Field(type => Author)
    author?: Author
}

export default Book;