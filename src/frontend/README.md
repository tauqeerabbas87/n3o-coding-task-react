# n30 Coding Task (React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is built with React(v18.2.0) and Ant Design. Hooks are used in this project.

This application has Four main components.
1. App -> contains two main components Donation Modal and Home.
2. Home -> Home contains the layout and Table Data component.
3. Donation Modal -> It has the form to create new donation item.
4. Table Data -> It contains the antd table component and its columns and configurations.

I have used **useReducer** hook to create a store for this application as recommended to use hooks.

## Store 
The Store folder contains the appStore file, which has *initial state* for the app store and *appReducer*.

## Types 
The common types are placed int he *types* folder

## Actions
Action folder contains all the actions used for updating the store.

## Services 
Services folder contains constants for BASE_URL and API URLs. It also contains all the services calls. This also contains the *instance* created by axios to call all the services.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
