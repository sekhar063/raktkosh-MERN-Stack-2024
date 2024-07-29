# Use official node image as a base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm uninstall bcrypt
RUN npm i bcrypt

# Copy the rest of the application code
COPY . .

# Expose the port on which the app runs
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "run", "dev"]
