# Apples-Project David Davidov
Which tools the project using for: Cloud - VMWare
1. Development: node js
2. Containerization: Docker
3. Source Code Managment: GitHub
4. DataBase: Mongo
5. Scripting: Bash
6. OS: Linux Ubuntu

Apples Project runs a website thatdisplay "Hello World!" and represents how many apples exist in a database.

## Run the server step by step:
1. Pull the repository from GitHub.
2. Run in terminal '<sup>bash ./install-docker.sh</sup>'. This script will install docker and docker-compose for building and running the environment.
3. Then Run in terminal '<sup>start.sh</sup>'. This script will start the proccess of building and running the environment.

After the architecture is up, you can run the web site. (URL >>> http://<paste-here-your-pc-ip>:80)

## Apples-Project Topology
![img](Apples-Project.png)

Apples project contains Docker Compose which runs 3 containers (nginx, nodejs and mongodb) in two networks (frontend and backend. Better security for DB).

When the user enter to the site, a request is made through port 80 which goes through NGINX which forwards it with the help of REVERSE PROXY to the NODEJS which starts looking for the relevant query in the database.
