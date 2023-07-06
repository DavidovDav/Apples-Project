#!/bin/bash

echo "===================updating==================="
sudo apt update && sudo apt upgrade -y
echo "================install docker================"
sudo apt install docker.io -y
echo "============install dokcer-compose============"
sudo apt install docker-compose -y
docker --version
docker-compose --version
sudo usermod -aG docker $USER && newgrp docker
