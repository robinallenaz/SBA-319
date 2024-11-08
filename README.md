# Project Overview

This project is a server application built with Node.js, Express, and MongoDB. It is designed to create a CRUD API that allows users to interact with a database of posts, comments, and users.

## How it Works

The application uses Express to handle HTTP requests and responses. It uses Mongoose to interact with the MongoDB database. The application has three main collections: users, posts, and comments.

* Users can be created, read, updated, and deleted (CRUD) using the /users endpoint.
* Posts can be created, read, updated, and deleted (CRUD) using the /posts endpoint.
* Comments can be created, read, updated, and deleted (CRUD) using the /comments endpoint.

## API Endpoints

The application provides the following API endpoints:

GET /users: Retrieves a list of all users.
POST /users: Creates a new user.
GET /users/:id: Retrieves a single user by ID.
PUT /users/:id: Updates a single user by ID.
DELETE /users/:id: Deletes a single user by ID.
GET /posts: Retrieves a list of all posts.
POST /posts: Creates a new post.
GET /posts/:id: Retrieves a single post by ID.
PUT /posts/:id: Updates a single post by ID.
DELETE /posts/:id: Deletes a single post by ID.
GET /comments: Retrieves a list of all comments.
POST /comments: Creates a new comment.
GET /comments/:id: Retrieves a single comment by ID.
PUT /comments/:id: Updates a single comment by ID.
DELETE /comments/:id: Deletes a single comment by ID.

## Objectives

Create a server application with Node, Express, and MongoDB.

Create a CRUD API using Express and MongoDB.

Create MongoDB indexes.

Use MongoDB indexing to make efficient queries.

Create MongoDB validation rules.

Use MongoDB validation to ensure data consistency.

| Requirement | Weight |
|-------------|--------|
| Use at least three different data collections within the database (such as users, posts, or comments). | 5% |
| Utilize reasonable data modeling practices. | 10% |
| Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. | 10% |
| Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. | 10% |
| Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. | 10% |
| Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. | 10% |
| Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. | 5% |
| Include sensible MongoDB data validation rules for at least one data collection. Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error. | 5% |
| Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection. Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents). | 5% |
| Utilize reasonable code organization practices. | 5% |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 10% |
| **Bonus Objectives** | **Weight** |
| Commit frequently to the git repository. | 5% |
| Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference. | 5% |
| Level of effort displayed in creativity and user experience. | 5% |


Reference: https://medium.com/@brandon.lau86/node-js-express-and-mongodb-get-started-fast-e3a0a09dd41f