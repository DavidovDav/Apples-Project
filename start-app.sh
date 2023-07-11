#!/bin/bash
if [[ $(which docker) && $(docker --version) && $(which docker-compose) && $(docker-compose -v) ]]; then
    echo "========Update docker========"
    sudo apt upgrade docker.io
    sudo apt upgrade docker-compose
  else
    echo "========Install docker========"
    bash install-docker.sh
fi
echo -e "\n==========Start a build of the environment=========="
docker-compose up --build
echo -e "\n==================Finish to build==================="
docker ps
