
# backend api for blog app


## Run Locally

Clone the project

```bash
  git clone https://github.com/github-rupanshu/blog_app
```

Go to the project directory

```bash
  cd blog_app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Deployment

Deployed on heroku on url 

``` 
https://blog-app-47.herokuapp.com/ping
  
```

  
## API Reference

### thunder client api json is provided import json in thunder client extension vs code and test apis.

### Set authrization token recieved in header as bearer token 

#### Register new user

```http
  POST /api/v1/user/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
| `email` | `string` |  **Required**|
| `passowrd` | `string` | **Required** |



#### Get jwt token for login 

```http
  POST /api/v1/user/gettoken
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |
| `passowrd` | `string` |  **Required**|



#### Create new blog POST

```http
  POST /api/v1/blog/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title `      | `string` | **Required** |
| `content `      | `string` | **Required** |


#### GET **Title** and **Name** of author of all blogs 

```http
  GET /api/v1/blog/get
```

#### GET **Title** and **Name** of **author** of a blog

```http
  GET /api/v1/blog/get/${id}
```

#### For searching by **Title** 

```http
  GET /api/v1/blog/gettitle/${title}
```


#### For deleting blog

```http
  DELETE /api/v1/blog/destroy/${id}

```
#### For updating blog

```http
  PUT /api/v1/blog/update/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title `      | `string` | **Required** |
| `content `      | `string` | **Required** |




