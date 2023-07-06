#!/bin/bash

sudo apt-get update

sudo apt install -y curl apt-transport-https ca-certificates software-properties-common

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker --version
docker-compose --version
