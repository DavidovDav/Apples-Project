#!/bin/bash

echo "===================updating==================="
sudo apt-get update
echo "===================install docker==================="
sudo apt install docker.io
echo "===================install dokcer-compose==================="
sudo apt install docker-compose #-o /usr/local/bin/docker-compose
echo "===================chmod to docker-compose==================="
sudo chmod +x /usr/local/bin/docker-compose
docker --version
docker-compose --version
sudo usermod -aG docker $USER && newgrp docker
