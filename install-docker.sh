#!/bin/bash
echo -e "\n================Updating system==============="
sudo apt update && sudo apt upgrade -y
echo -e "\n===============Install docker.io=============="
sudo apt install docker.io -y
echo -e "\n============Install dokcer-compose============"
sudo apt install docker-compose -y
echo -e "\nVersions:"
docker --version
docker-compose --version
sudo usermod -aG docker $USER && newgrp docker
