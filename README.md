# In the cloud: Online file storage

## Overview
In the cloud is the online storage application that allows user to upload/store/download files
The project is depeveloped on ReactJS, Bootstrap and Firebase for authentication process and storage files.

## Before running
FirebaseConfig is needed to run the project. Create new project in Firebase and get firebase config.
These firebase confid should be stored at /inthecloud/.env.local
The format of the file should look like the below:
process.env.REACT_APP_FIREBASE_API_KEY = api_key <br/>
process.env.REACT_APP_FIREBASE_AUTH_DOMAIN = auth_domain <br/>
process.env.REACT_APP_FIREBASE_PROJECT_ID = project_id <br/>
process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = storage_bucket <br/>
process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID = sender_id <br/>
process.env.REACT_APP_FIREBASE_APP_ID = app_id <br/>
process.env.REACT_APP_FIREBASE_MEASUREMENT_ID = measurement_id <br/>

## How to run
npm start

## Screenshots
When first log in to the app, there is a log in page <br/>
![Alt text](/screenshot/Login.png "LogIn Page") <br/>
If user dont have a account, they can sign up with email and password. <br/>
Else if forget password. The reset password option is provided <br/>
![Alt text](/screenshot/ResetPassword.PNG "Reset Password Page")<br/>
When successfully login, homepage will look like the below. <br/>
User can create new folder in cloud by clicking "New folder". <br/>
Upload new files by clicking "Upload files" <br/>
The files can be classified into folders, folders in folders and shown the path as breadcrumb <br/>
![Alt text](/screenshot/HomePage.PNG "Home Page") <br/>



Credit to Youtube: Web Dev Simplifier <br/>
AppIcon: Flaticon
