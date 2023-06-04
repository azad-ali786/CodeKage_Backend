# CodeKage Backend API

This is the backend API for the CodeKage application. It provides endpoints for managing code snippets and executing code.

## Code Structure

The backend code is organized into the following directories:

- `controllers`: Contains the controllers that handle the API logic.
- `models`: Contains the Mongoose models for interacting with the database.
- `routes`: Contains the route definitions for the API endpoints.
- `services`: Contains additional services or utilities used by the API.
- `app.ts`: The entry point of the application.

## Installation

1. Clone the repository:

```shell
    git clone <repository-url>
```
2. Install dependencies:

```shell
    npm install
```

## Configuration

1. Create a `.env` file in the root directory based on the provided `.env.example` file.
2. Update the values in the `.env` file to match your environment settings.

## Starting the API

To start the TypeScript backend API, follow these steps:

1. Build the project:

```shell
        npm run build
```

2.Start the API:

```shell
        npm run start
```

The API will start running on the configured port, and you should see a message in the console indicating that the server is running.

`Note`: Make sure to run the tsc command whenever you make changes to the TypeScript code before starting the API again.

## API Routes

The API provides the following routes:

- GET `/code/:userId`: Fetches the code snippet for a specific user.
- POST `/code`: Saves a new code snippet for a user.
- POST `/runCode`: Executes the provided code snippet.

Detailed documentation and examples for each route can be found in the respective route files under the `routes` directory.

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL database for storing code snippets
- Mongoose: Object Data Modeling (ODM) library for MongoDB

## Contributing

Contributions to the CodeKage backend API are welcome! If you find any issues or would like to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

`Feel free to copy the updated Markdown and use it as your README.md file.`