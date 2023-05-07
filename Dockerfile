FROM node:18

# Create app directory
WORKDIR /app

# Copy files
COPY . .

# Install app dependencies
RUN npm install

# Start app
CMD [ "npm", "run", "start" ]
