# Dockerfile
# Start with a base image. We'll use the Node.js 14 LTS (Long Term Support) version.
FROM node:20.12.2-alpine AS builder
ENV NODE_ENV production

# Set the working directory inside the Docker container.
WORKDIR /app

# Cache and Install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install the dependencies inside the Docker container.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginxinc/nginx-unprivileged:alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 8080

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]