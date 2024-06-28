# WorkoAi Assignment

## Description
Created user workflow with MVC architecture, used mongodb as a database

## Authentication
- Added Basic Authntication for all the routes through Authentication headers
- You can configure or change the admin username and password in .env file


### Project Structure

The project structure is organized as follows:

    ├── controllers/
    |      └── userController.js
    ├── routes/
    │      └── userRoutes.js             
    ├── middlewares/
    │      ├── auth.js             
    │      └── validator.js             
    ├── dtos/
    |      └── userDTO.js                  
    ├── models/
    |      └── userModel.js            
    ├── services/
    |      └── userService.js                     
    ├── .env               
    └── index.js                       


## Installation
1. Clone this repository.
2. Navigate to the directory that you cloned this repository to, then run:

```
npm install
```
3. Start server
```
npm run dev
```
3. Server Endpoint
```
http://127.0.0.1:6000/
```

## API Endpoints
*Use username and password from .env to access all the routes*
- `GET /worko/user` - List all users
- `POST /worko/user` - Create user
- `DELETE /worko/user` - Delete all users
- `GET /worko/user/:userId` - Get user details
- `PUT /worko/user/:userId` - Update user
- `PATCH /worko/user/:userId` - Update user
- `DELETE /worko/user/:userId` - Soft delete user
