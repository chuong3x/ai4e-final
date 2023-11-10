FROM node

# Create app directory in side node container
WORKDIR /usr/server

# Copy package.json and tsconfig.json to /usr/server within node container
COPY package*.json ./
COPY tsconfig*.json ./

# Install app dependencies
RUN npm install

# Copy all files to /usr/server (except files in .dockerignore)
COPY . .

# Build code
RUN npm run build

# Open port (other container in the same network can connect or we can mount outside)
EXPOSE 3001

# Run app
CMD [ "node", "./dist/main.js", "--host", "0.0.0.0" ]