## Getting Started

First, install all the packages:

```
npm instal
```

Second, run the server:

```
npm run start
```

Third, login with the user:

Go to postman and make a POST request to this endpoint:

```
http://localhost:5000/login
```

with this body:

```
{
    "email": "emails@tester.com",
    "password": "123456788",
}
```

Fourth, if you want to add additional shops and merchants to the DB:

run this:

```
npm run populate
```

Fith, if you want a list of the 10 cloest shops to the user

make a GET request with this using the token which was generated when logging in:

```
http://localhost:5000/list
```
