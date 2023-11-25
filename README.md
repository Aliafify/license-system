# License Manager

License Manager is a Node.js application developed to manage and control licenses for digital products. This application facilitates the generation of licenses, provides control over their duration, and offers an API for verifying the authenticity of licenses associated with your digital products.

## Owner of this application 
Dr/ Ali Afifi, the founder of [OSBASH](#osbash.com) company

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with License Manager, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aliafify/license-system

1- Navigate to the project directory:

   cd license-manager

2- Install dependencies:

npm install

3- Set up your configuration:

create .env file and add
 MONGO = mongodb+srv://<username>:<password>@cluster0.ouc2r.mongodb.net/<collection>?retryWrites=true&w=majority

4- run application

npm run server

5- API end-points 
 # /generate-license
 for generating new license


 # /api/osbash-product/license/validate
 for validating the license


