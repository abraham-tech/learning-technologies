const { gql } = require('apollo-server');

const typeDefs = gql`
    type Post {
        content: String, 
        id: ID!,
        published: Boolean!,
        title: String
    }

    type Query {
        feed: [Post!]!
        post(id: ID!): Post
    }

    type Mutation {
        createDraft( content: String, title: String! ): Post!
        publish(id: ID!): Post
    }
`

const posts = [
    {
        id: 1,
        title: 'Subscribe to GraphQl Weekly for comunity news. ',
        content: 'https://graphqlweekly.com',
        published: true
    },
    {
        id: 2, 
        title: "Follow DigitalOcean on Twitter",
        content: 'Https://twitter.com/digitalocean',
        published: true
    }, 
    {
        id: 3, 
        title: 'What is GraphQl?',
        content: 'GraphQL is a query language for APIs',
        published: false    
    }

]