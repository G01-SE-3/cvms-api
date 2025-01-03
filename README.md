# CVMS Service

This project sets up a Node.js environment to create a REST API for the CVMS application.

## Table of Contents

- [1. Set Up Your Node.js Environment](#1-set-up-your-nodejs-environment)
- [2. Start the Server](#2-start-the-server)

## 1. Set Up Your Node.js Environment

Follow the steps below to set up your Node.js environment:

1. **Install Node.js**: If you haven’t already, download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a New Project**:

    ```bash
    mkdir cvms-service
    cd cvms-service
    npm init -y
    ```

3. **Install Dependencies**:

    ```bash
    npm install express pg dotenv
    ```

    - `express`: To create a REST API.
    - `pg`: PostgreSQL client for Node.js.
    - `dotenv`: To manage environment variables.

4. **Get the Folder from the Project GitHub Repo**: [here]()

---

## 2. Start the Server

To start the server, navigate to the project directory and run the following command:

```bash
node server.js
