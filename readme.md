![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Basic Auth

## Introduction

In this lab, you are going to reinforce the knowledge on how to create basic authorization and authentication in a web app.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_044a7b23c9b4cf082e1c4fadcd12d308.png)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

_In this lab, you literally have to recreate materials your instructors went through on the class. The point is not to blindly copy-paste them, but the opposite of that: to go once again, step by step through the process of registering users and authenticating them in the web app. Try to target all the weak spots, everything you missed to grasp during the lecture time, so you can ask your instructors and assistants to push you through the learning process._

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to install all the dependencies:

```sh
$ cd lab-express-basic-auth
$ npm install
```

Now you are ready to start 🚀

## Iteration 1 | Sign Up

We have to create the _signup_ feature - the goal is to enable our users to register in our application. The users have to provide the following information:

- **username**: must be unique in our application, and will identify each user
- **password**: must be encrypted (you can use the `bcryptjs` npm package).

To complete this first iteration, you have to create the model as well as corresponding routes.

## Iteration 2 | Login

Once the user has signed up, they should be able to authenticate themselves.
This means the user should be able to log into the application.
Your assignment in this iteration is to create corresponding routes to let them log into the application.

As you know, it is not enough just to allow users to log in.
Users should be able to maintain their "presence" in the application.
For this we need to send them a token for future requests.
You have learned that you can use the `jsonwebtoken` npm packages to create a JWT.

## Iteration 3 | Protected Routes

At this point, you have implemented the basic authentication in this application. Your next assignment is to create the authentication middleware and protect some routes. Refresher: users can't visit these routes unless they are authenticated (logged in and exist in the session).

Let's create two different routes protected by authentication:

- `/main` - Send a funny picture of a cat. Either send a link in a JSON response, or use `res.sendFile()` to send an HTML file which shows the image.
- `/private` - Send your favorite `gif` and indicate that the route is private, either with a JSON field or in an HTML `<h1>`.

Create the custom authentication middleware function.
Once created, use the middleware and protect the routes to prevent access from unauthenticated users.

## Bonus | The validation

### Validation during the signup process

You should handle validation errors when a user signs up:

- The fields can't be empty.
- The username can't be repeated.

### Validation during the login process

If there is a problem with the data submitted to the API, indicate to the user what they must do.

For instance:

- has the password met the length requirements?
- have the credentials not matched?
