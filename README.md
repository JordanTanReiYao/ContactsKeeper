# ContactsKeeper
This project was developed for an assignment for CS3219 at NUS. The API created for these tasks is for contact details (e.g. name, email, phone number, gender). Written in JavaScript for backend and Vue for frontend

## Task B1

### Instructions on how to run the API locally

After cloning the GitHub repository, run the following commands:

1. <code>npm install</code>
2. <code>nodemon index</code>


Visit http://localhost:8080 to access the site. 
You will access the contact details at http://localhost:8080/api/contacts

### Instructions on how to access the deployed API

1.	The API is deployed with Heroku using a MongoDB cloud instance as the database. 
2.	You can visit the site at https://stormy-tor-93071.herokuapp.com/ 
3.	Visit https://stormy-tor-93071.herokuapp.com/api/contacts to access the contact details.


## Task B2

### Instructions on how to run tests locally

1.	Follow the instructions above on how to clone and install the necessary packages using <code>npm install</code>
2.	Run the command <code>npm test</code> in the root of the project directory.    

### Instructions on how to access Travis test results

1. Go to https://travis-ci.com/github/JordanTanReiYao/CS3219_TaskB/builds/182969028

## Task B3

### Instructions on how to access AWS Lambda API
1. I have deployed the API to AWS Lambda using Travis. Travis automatically deploys the REST API to AWS Lambda. The API is given by this link:<br> https://6d21nps248.execute-api.us-east-2.amazonaws.com/dev  

2. To access the contact details use this link:<br> 			               https://6d21nps248.execute-api.us-east-2.amazonaws.com/dev/api/contacts 


## Task B4

### Instructions on how set up the frontend

1.	Make sure you have followed the instructions above to clone and set up the project
2.	Go to the “webpage” directory and run the following commands:
    1. <code>npm install</code>
    2. <code>npm run serve</code>
3.	You can visit the website at http://localhost:8080/ 
4.	The website will display a list of all the contacts, and you can easily add new contacts, delete contacts, or update the details of existing contacts.

