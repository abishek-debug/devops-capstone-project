# Use official Node.js LTS image as base
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run when container starts
CMD ["node", "app.js"]
