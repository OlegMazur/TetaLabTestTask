
# TetaLabTestTask
# CalendarJS

## Description
[**Calendar**]Description

The main theme of the project is a schedule calendar.

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the ```package.json``` files in the ```client``` and ```server``` folders.

### Common

1. [Git](https://git-scm.com/doc)
2. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html)
3. [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token)
4. [npm](https://en.wikipedia.org/wiki/Npm_(software))
5. [ESLint](https://eslint.org/docs/user-guide/getting-started)
6. [momentjs]

### Frontend
1. [React](https://reactjs.org/docs/getting-started.html)


### Backend
1. [Node.js](https://nodejs.org/en/)
2. [Express]
3. [bcrypt](https://www.npmjs.com/package/bcrypt)
4. [nodemon](https://www.npmjs.com/package/nodemon)
5. [dotenv](https://www.npmjs.com/package/dotenv)
6. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Database
1. [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL")

## Installation

1. Get the latest stable version [Node.js](https://nodejs.org/en/ "Node.js") (LTS). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

    ```
    node -v  // for checking Node.js version
    npm -v // for checking npm version
    ```

2. Get the latest stable version [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL") for your OS. Check the correctness of the work - try to create a database, a table - for this you can use [pgAdmin](https://www.pgadmin.org/ "pgAdmin") or any other convenient way you find.

3. Create in PostgreSQL **empty** database for the project. For example, *calendar*.

4. Install Git.

5. Clone project`s [repo](https://github.com/OlegMazur/TetaLabTestTask.git):

    ```
    git clone https://github.com/OlegMazur/TetaLabTestTask.git
    ```



### Root of project

### Backend

1. In the command line (terminal) go to the folder server:

    ```
    cd /* path to server folder */
    ```

2. Install all required packages from ```package.json``` with the command:

    ```
    npm install
    ```

3.  In the server folder create a file **.env** and copy the contents of the file **.env.example** into it.

    **Note**: file **.env** contains real project keys and should not be saved to the repository.

    Replace in file **.env** key values to real.
    

4. To start the server in the command line (terminal) in the server folder, run:

    ```
    npm start
    ```

### Frontend

1. In the command line (terminal) go to the ```client``` folder:

    ```
    cd /* path to client folder */
    ```

2. Install all required packages from package.json with the command:

    ```
    npm install
    ```



3. To run the client from the command line (terminal) in the client folder, run:

    ```
    npm start
    ```

    The app should automatically open in your default browser.
## PS
PS. Test login "Oleg" password "123456"
