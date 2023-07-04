FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

RUN npm install \
    prom-client \
    express \
    mongoose \
    mongodb \
    ejs \
    node
    
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start" ]
