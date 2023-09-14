### Introduction
This project is the backend track task 2
* Users can be created, accessed, updated and deleted.

### Installation Guide
* Clone this repository [here](https://github.com/Mickabtech/hngxstage2.git).
* The main branch is the most stable branch at any given time, ensure you're working from it.
* Run `npm install` to install all dependencies
* Create an .env file in your project root folder and add your variables. 
### Usage
* Run `node app.js` to start the application.

#### Host
[https://hngxstage2-279n.onrender.com](https://hngxstage2-279n.onrender.com)
#### Endpoints
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| POST | /api | To create a new user |
##### Request

```json
    {
        "name": "shola"
    }
```
##### Response
```json
    {
    "message": "User created successfully",
    "user": {
        "name": "shola",
        "_id": "650232fdd57ef0caa1bf2c63",
        "__v": 0
    }
}
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| GET | /api/:id | To get a single user |
##### Response
```json
   {
    "_id": "650232fdd57ef0caa1bf2c63",
    "name": "shola",
    "__v": 0
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| PUT | /api/:id | To put/update a user |
##### Request
```json
    {
        "name": "jobizil"
    }
```
##### Response
```json
    {
    "message": "User updated successfully",
    "user": {
        "_id": "650232fdd57ef0caa1bf2c63",
        "name": "jobizil",
        "__v": 0
    }
}
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| DELETE | /api/:id | To delete a single user |
##### Response
```json
  {
      "message": "user deleted successfully",
  }
```
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
