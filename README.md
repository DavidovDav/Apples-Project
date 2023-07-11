# Apples-Project David Davidov
Apples Project runs a website that display "Hello World!" and shows the number of apples stored in a database.

Tools used in the project: Cloud - AWS
1. Development: node js
2. Containerization: Docker
3. Source Code Managment: GitHub
4. DataBase: Mongo
5. Scripting: Bash
6. Operating System: Linux Ubuntu

## Apples-Project Topology
![img](Apples-Project.png)

## How to run the Apples Project?

### Running the docker-compose architecture Step by Step:
1. Clone the repository from GitHub and navigate to the project directory.
2. Run the command '<sup> bash ./install-docker.sh </sup>' to install Docker and Docker Compose.
3. Then run the command '<sup> bash ./start-app.sh </sup>' to build and run the environment.

* Once the architecture is up and running, you can access the website at the following URL: http://paste-here-your-pc-ip:80

### Running the server on the cloud with LB.
Requierments for LB setup:
1. Networking: Create VPC(Virtual Private Cloud), public Subnets, Route Table, Internet Gateway and Security Group.
2. Application Deployment: Launch the required instances and run the architecture (as explained earlier).
3. Create a Target Group (protocol: HTTP, port: 80) and attach the instances to it.
4. Create an Application Load Balancer (ALB) and attach the relevant networking services (as mentioned in section 1). Configure a default action to forward traffic to the target group.
5. Copy the DNS name of the ALB and use it in the URI.

### How it works?
#### Cloud and Application Load Balancer
When a user connects to the ALB's DNS name, the ALB receives the request and performs load balancing across the instances in the target group. The ALB routes the request to a healthy instance based on its load balancing algorithm. The selected instance processes the request and sends the response back to the ALB, which then forwards it to the user's browser. This enables scalable and efficient distribution of incoming traffic, ensuring high availability for the application.

#### Docker Architecture
The Apples-Project Docker architecture utilizes Docker Compose to run three containers (nginx, Node.js, and MongoDB) in two networks (frontend and backend), enhancing the security of the database.
when the user connects to the ALB's DNS name, the ALB routes the request to an instance. Inside the instance, NGINX acts as a reverse proxy, forwarding the request to the Node.js container. Node.js interacts with MongoDB, processes the request, and generates a response. NGINX then sends the response back to the ALB, which delivers it to the user's browser.

Overall, the project demonstrates a simple web application architecture using Cloud, Load Blancer, Docker containers and demonstrates the interaction between different services.
