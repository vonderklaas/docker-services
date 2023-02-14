# Base image
FROM node:15 

# Work directory in container
WORKDIR /app

# Copy package.json to /app
COPY package.json .

# Install dependencies
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi

# Copy rest of our files to /app
COPY . ./

# Environment variables
ENV PORT 3000
EXPOSE $PORT

# Run command to start container
CMD ["node", "index.js"]