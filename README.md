# United States Bureau Of Labor Statistics GraphQL Server
Operation Refactor America's wrapped United States Bureau Of Labor Statistics's REST API with GraphQL. The REST endpoints have been mapped as GraphQL types and resolvers. **Note: This API doesn't required an API Key.**

If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: ](#api-data)
*  [GraphQL Query Examples](#graphql-query-examples)

## About the Data
The data comes directly from the United States Bureau Of Labor Statistics's REST API. A summary of endpoints and documentation can be found here: https://www.bls.gov/help/hlpforma.htm

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: 



## GraphQL Query Examples
### Example #1: Number of all Burglary Victims (Annually)
**Query:**




### Example #2: Retrieve Agency by Originating Agency Identification (ORI)
**Query:**



**GraphQL Result:**




### Example #3: Number of all Homicide Victims in the Arizona by Age Range (Annually)
**Query:**



**GraphQL Result:**

