# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install

# If TypeScript is not in the dependencies, install it globally
RUN npm install -g typescript

# Copy the rest of your backend's source code
COPY . .

# Build the project (compile TypeScript)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run your app using the compiled JavaScript
CMD ["node", "dist/index.js"]
