FROM node:16

# Create app directory
WORKDIR /app

# Copy app sources
COPY ./package*.json ./
COPY ./views ./views
COPY ./app.js .
COPY ./node_modules ./node_modules

# Install app dependencies
RUN npm install \
    express \
    mongoose \
    ejs \
    node

EXPOSE 3000

# Run the script that execute the app.
CMD [ "npm", "run", "start" ]
