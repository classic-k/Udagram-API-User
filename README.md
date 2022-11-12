# Udagram-API-User


# Udagram-Frontend App Boostrap By

# Prerequisites
You should have the following tools installed in your local machine:
* Node.js
* Docker

## Node.js
### Instructions
Install Node.js using [these instructions](https://nodejs.org/en/download/). We recommend a version between 12.14 and 14.15.

This installer will install Node.js as well as NPM on your system. Node.js is used to run JavaScript-based applications and NPM is a package manager used to handle dependencies.

### Verify Installation
```bash
# v12.14 or greater up to v14.15
node -v
```

```bash
# v7.19 or greater
npm -v
```

## Docker
Docker is needed to build and run containerized applications.

### Instructions
Follow the instructions for [Docker Desktop](https://docs.docker.com/desktop/#download-and-install) to install Docker.

### Download Dependencies
Download all the package dependencies by running the following command from the `/project/udagram-frontend/` directory:
```bash
npm install .
```

# Make sure the Docker services are running in your local machine
# Remove unused and dangling images
```bash
docker image prune --all
```
# Run this command from the directory where you have the "DockerFile" file present
```bash
docker build . 
# Get Docker images
docker images

# Once you have docker image-name 
# set env vial cli or create file for env variables
docker run image-name
```
