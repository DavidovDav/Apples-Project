#!/bin/bash

# Create a volume and give the access to the current user.
mkdir ~/jenkins_home && sudo chown -R $USER:$USER ~/jenkins_home

# Run the jenkins container
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock -v ~/jenkins_home/:/var/jenkins_home/ jenkins/jenkins:lts

docker logs jenkins
