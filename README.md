# todo web

this is a very simple task management front-end made with react

# how to start with docker

- need to have docker on your system
- create .env.development.local file from .env.example and customize it for your enviroment
- build the api docker images "docker build . -t todo-web"
- start the container by excuting this command "docker-compose up" or lookup the commands section for help
- stop project by ctrl+c
- remove the container by excuting this command "docker-compose down" or lookup the commands section for help

# how to start with npm

- need to have nodejs and npm
- use "npm i" to get all the dependancies
- use this command "npm run start" to run in dev environment

# routes

- /
- /create/
- /edit/:id

# dependencies

- react-scripts: for npm react scripts
- react and react-dom: to use react
- react-router-dom: for routing
- react-redux and redux: to use redux to manage the state
- redux-saga: to integrate the request handling with redux
- axios: to send requests to the back end
- react-bootstrap and bootstrap: to use the bootstrap liberary for the ui

# note

<p>
if you used docker to start the dev env it will not start your browser on it's own you will need to open it your self
</p>
<p>
there is no docker file for building or deploying only for development
because i don't intend on deploying this project for now
</p>
