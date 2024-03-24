# Node.js express.js REST API - Price Service For Stocks

## Getting started

This is a basic API REST skeleton written on JavaScript using the fs in memory database save the data in the file.



## Features

-   Multiple environment ready (development, production)
-   Compressed responses.
-   Secured HTTP headers.
-   CORS ready.
-   HTTP request logger in development mode.
-   Place model and controller.
-   API collection for Postman.
-   Testing with jest for API endpoints.
-   NPM script for keeping good source code formatting using prettier and ESLint.
-   Use of ESLint for good coding practices.

## Requirements

-   Node.js **16+**


## How to install

### Using Git (recommended)

1.  Clone the project from github.

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd backend
npm install
npm update
```

## How to run

### Run the server

```bash
npm run start
```

-   `start` start the server.

### Running in development mode (lifting API server)

```bash
npm run dev
```
### Running the linting (lifting API server)

```bash
npm run lint:fix
npm run format:check
npm run format:write
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Starting Server
*    Port: 8000
*    NODE_ENV: development
****************************
```

### Running tests

It´s a good practice to do tests in code, so a sample  add the test directory to test the service

```bash
npm run test
```

## Usage

Once everything is set up to test API routes either use Postman or any other api testing application.
### API documentation

<https://documenter.getpostman.com/view/10370902/2sA35Bb4ZS>

### Postman API example collection

You can import the example collection to Postman. To import, click the import button located and select `postman-example.json` located within the root directory.

Go to `manage environments` to create environments for development, production, etc. On each of the environments you create you will need to:

This is a REST API, so it works using the following HTTP methods:

-   GET (Read): Gets a list of stock prices, or list based on date range