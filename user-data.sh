#!/bin/bash
# This script only for when you launch new instance.
# Copy and paste it to the user data.
# This script will install git, docker and docker-compose.
su - ubuntu bash -c '
sudo apt update && sudo apt upgrade -y
sleep 2s
sudo apt install git -y
sleep 2s
cd /home/ubuntu
sudo git clone https://github.com/DavidovDav/Apples-Project.git
sleep 2s
cd Apples-Project
bash install-docker.sh
'
