<div align="center">
  <h1>Node.js and Microsoft Azure</h1>

  <p>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Technologies and skills](#technologies-and-skills)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Infrastructure](#infrastructure)
    * [Database](#database)
    * [Running the apps](#running-the-apps)

<!-- Technologies -->
## Technologies and skills
As **technologies and tools**, this skeleton API uses:
- **Node.js and Express.js** as development framework
- **Mongodb** as database
- **Microsoft Azure** as cloud service

<!-- GETTING STARTED -->
## Getting Started

This is an instructions on setting up the project locally.

### Prerequisites
Have **node** and **nvm** installed. Use version **20**.
```bash
$ nvm use 20.11.1
```

### Installation

1. Clone repository
```bash
$ git clone https://github.com/crissancar/node-azure.git
```
2. Install dependencies
```bash
$ npm install
```

### Environment
Rename the .env.example file to .env and assign the variables values

### Databases
#### MongoDB
Connect with MongoDB Atlas cluster

### Running the apps
```bash
$ npm run start:dev
```