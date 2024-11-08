# Authentication API

This is a simple authentication API built with Express.js, which includes backend routes for user registration and login. The API validates requests using `@hapi/joi` and hashes passwords with `bcrypt` for security.

## Features

- User registration with validation and password hashing
- User login with validation
- Validation using `@hapi/joi`
- Password hashing using `bcrypt`
- Tested using Postman

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (for user data storage)
- **@hapi/joi** (for request validation)
- **bcryptjs** (for hashing passwords)

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Authentication-using-JWT.git
   cd Authentication-using-JWT
