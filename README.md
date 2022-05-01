# Twitter Clone

## How to run project.
1. Open the project in any ide (preferably vscode or WebStorm)
2. In the terminal (console) enter the commands: ```cd client``` and ```npm i``` to install the necessary packages for the client/frontend.
3. For the server part to work, you need to install the database - PostgreSQL (https://www.postgresql.org/download/).
4. After installation, you need to create a database in the PostgreSQL panel called pgAdmin.
5. Next, you need to set the settings in the db.js file located in the server folder
your database : database name, the user you specified when creating it, the database password,
host (default localhost) and port (default 5432).
6. In the terminal (console) enter the commands: ```cd server``` and ```npm i``` to install the required packages for the server/backend.
7. After installing all the packages and additional software, enter the commands that will run your project. 
To start the server part - ```cd server``` and ```npm run dev```. To start the client - ```cd client``` and ```npm start```.

## Как запустить проект.
1. Окрыть проект в любой ide(желательно в vscode или WebStorm)
2. В терминале(консоле) введите комманды : ```cd client``` и ```npm i``` для установки необходимых пакетов для client/frontend.
3. Для работы серверной части вам необходимо установить базу данных - PostgreSQL(https://www.postgresql.org/download/).
4. После установки вам нужно создать базу данных в панели PostgreSQL, которая называется pgAdmin.
5. Далее вам необходимо в файле db.js, находящийся в папке server, установить настройки
вашей базы данных : имя базы данных, пользователя, которого вы указали при создании, пароль от базы данных, 
хост(по умолчанию localhost) и порт(по умолчанию 5432).
6. В терминале(консоле) введите комманды : ```cd server``` и ```npm i``` для установки необходимых пакетов для server/backend.
7. После установки всех пакетов и допольнительного ПО, введите команды, которые запустят ваш проект. 
Для запуска серверной части -  ```cd server``` и ```npm run dev```. Для запуска клиентской - ```cd client``` и ```npm start```. 
 
