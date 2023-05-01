# TetaLabTestTask
CalendarJS
Description

The main theme of the project is a schedule calendar.

Technologies
The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the package.json files in the client and server folders.

Common
Git
REST API
JWT
npm
ESLint
momentjs
Frontend
React

Backend
Node.js
Express
Sequelize
bcrypt
nodemon
dotenv
jsonwebtoken
Database
PostgreSQL
Installation
Get the latest stable version Node.js (LTS). Note: npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

node -v  // for checking Node.js version
npm -v // for checking npm version
Get the latest stable version PostgreSQL for your OS. Check the correctness of the work - try to create a database, a table - for this you can use pgAdmin or any other convenient way you find.

Create in PostgreSQL empty database for the project. For example, calendar.

Install Git.

Note: If you are using Windows, do these two additional steps before cloning the repo:

Change eol setting in your code editor to lf.
Change the autocrlf setting to input in the Git settings:
git config --global core.autocrlf input
Clone project`s repo:

git clone https://github.com/OlegMazur/TetaLabTestTask.git
or download ZIP archive

Root of project
In the root of the project, you can install all the dependencies with one command:


Backend
In the command line (terminal) go to the folder server:

cd /* path to server folder */
Install all required packages from package.json with the command:

npm install
In the server folder create a file .env and copy the contents of the file .env.example into it.

Note: file .env contains real project keys and should not be saved to the repository.

Replace in file .env key values to real. 

To start the server in the command line (terminal) in the server folder, run:

npm start

Frontend
In the command line (terminal) go to the client folder:

cd /* path to client folder */
Install all required packages from package.json with the command:

npm install
In the client folder create a file .env and copy the contents of the file into it .env.example.

Note: file .env contains real project keys and should not be saved to the repository.

Replace in file .env key values to real.

To run the client from the command line (terminal) in the client folder, run:

npm start
The app should automatically open in your default browser.

PS. Test login "Oleg" password "123456"
