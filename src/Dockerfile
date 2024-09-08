# Use the official Node.js 20 base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

RUN npm install --production

# Expose the port the application will run on (if required, e.g., port 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "serve"]
