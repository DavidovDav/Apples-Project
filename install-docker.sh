#!/bin/bash

sudo apt-get update

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
