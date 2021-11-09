import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class Author {
    @Field(type => ID)
    id!: string

    @Field()
    firstname?: string;
    
    @Field()
    lastname!: string;
}

export default Author;