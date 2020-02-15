---
title: 3. React Native Amplify API
description: Adding a GraphQL to React Native with AWS Amplify
---

__This guide will show you how to add an API and database to a React Native app with AWS Amplify.__

The Amplify CLI supports creating and interacting with two types of APIs: REST and GraphQL.

The API you will be creating in this step is a GraphQL API using AWS AppSync (a managed GraphQL service) and the database will be Amazon DynamoDB (a NoSQL database).

To add the API, run the following command.

```sh
$ amplify add api

? Please select from one of the below mentioned services: GraphQL
? Provide API name: myapi
? Choose the default authorization type for the API: API Key
? Enter a description for the API key: demo
? After how many days from now the API key should expire: 7 (or your preferred expiration)
? Do you want to configure advanced settings for the GraphQL API: N
? Do you have an annotated GraphQL schema? N
? Do you want a guided schema creation? Y
? What best describes your project: Single object with fields
? Do you want to edit the schema now? Y
```

The CLI should open the schema in your text editor.

```graphql
# amplify/backend/api/myapi/schema.graphql
type Todo @model {
  id: ID!
  name: String!
  description: String
}
```

The schema generated is for a Todo app. You'll notice a directive on the `Todo` type of `@model`. this directive is part of the GraphQL transform library of Amplify.

A type decorated with this directive will scaffold out the database table for the type (Todo table), the schema for CRUD (create, read, update, delete) and list operations, and the GraphQL resolvers needed to make everything work together.

To test this out locally, you can run the `mock` command:

```sh
$ amplify mock api
```

This will open the GraphiQL explorer on a local port. From the test environment you can try out different operations locally, like queries and mutations, before deploying the back end.

To deploy this back end, run the `push` command:

```sh
$ amplify push

? Are you sure you want to continue? Y
? Do you want to generate code for your newly created GraphQL API? Y
? Choose the code generation language target: javascript
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions? Y
? Enter maximum statement depth [increase from default if your schema is deeply nested]: 2
```

Now, the API and database have been deployed and you can start interacting with it.

Next, open App.js and update it with the following code:

```javascript

```