# Pinterest Clone
A Pinterest-like application built with Node.js, Express, MongoDB, and EJS.

## Table of Contents
* Introduction
* Features
* Installation
* Usage
* Screenshots
* Technologies Used
* Contributing
* License
  
## Introduction
This project is a clone of Pinterest, a popular image-sharing social media service. It allows users to upload, save, and share images. The application is built using Node.js, Express, and MongoDB for the backend, and EJS for rendering views.

# Features
* User authentication and authorization
* Upload images
* Create , edit profile
  others features are under development ... 


## Installation
To get a local copy up and running follow these simple steps:

### Prerequisites
* Node.js
* MongoDB

### Clone the Repository
```` bash
git clone https://github.com/RahulSingh044/Pinterest-Clone.git
cd Pinterest-Clone
````
## Install Dependencies
```` bash 
npm install
````
## Set Up Environment Variables
Create a .env file in the root directory and add the following:

```` makefile
PORT=3000
MONGO_URI=your-mongodb-uri
SESSION_SECRET=your-session-secret
````

## Start the Application
```` bash
npm start
````
Your application should now be running on http://localhost:3000.

## Usage
1. Register a new account or log in with an existing account.
2. Create a new board to organize your images.
3. Upload images to your boards.

## Screenshots


## Technologies Used
* Node.js
* Express
* MongoDB
* Mongoose
* EJS
* Passport.js (for authentication)
* Multer (for image uploads)
* Bootstrap (for styling)
  
## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/YourFeature)
3. Commit your Changes (git commit -m 'Add some YourFeature')
4. Push to the Branch (git push origin feature/YourFeature)
5. Open a Pull Request
   
## License

[MIT](https://choosealicense.com/licenses/mit/)
