#### Host
[https://hngxstage2-279n.onrender.com](https://hngxstage2-279n.onrender.com)
#### Endpoints
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| POST | /api | To create a new user |
##### Request

```json
    {
        "name": "mickab"
    }
```
##### Response
```json
   {
    "message": "User created successfully",
    "user": {
        "name": "mickab",
        "_id": "650230c2aec64cb3a40f85fa",
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
    "_id": "650230c2aec64cb3a40f85fa",
    "name": "mickab",
    "__v": 0
}
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| PUT | /api/:id | To put a user |
##### Request
```json
    {
        "name": "Olamide"
    }
```
##### Response
```json
   {
    "message": "User updated successfully",
    "user": {
        "_id": "650230c2aec64cb3a40f85fa",
        "name": "Olamide",
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
    "message": "Person deleted successfully"
  }
```
