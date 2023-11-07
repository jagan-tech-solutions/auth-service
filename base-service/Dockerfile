# FROM egovio/alpine-node-builder-14:yarn

# ARG WORK_DIR
# ENV npm_config_cache=/tmp
# WORKDIR /app

# COPY ${WORK_DIR}/package.json ${WORK_DIR}/yarn.lock .

# RUN yarn

# RUN ls -lah

# COPY ${WORK_DIR}/src .

# CMD ["yarn", "start"]




# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application source code to the container
COPY . .

# Expose a port if your Node.js application listens on a specific port
EXPOSE 8080

# Define the command to run your Node.js application
CMD [ "npm", "start" ]
