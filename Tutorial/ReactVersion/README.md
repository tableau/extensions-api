# React Tutorial

This folder contains a version of our finalized tutorial written in React instead of using jQuery and more traditional javascript techniques. The demo is functionally the same, but highlights some best practices and techniques for building an extensions using React

## Setup

- Navigate to this folder in a command prompt
- run `npm install`
- Copy `TutorialReact.trex` file to `~/My Tableau Repository (Beta)/Extensions`
- run `npm start` to start the web server and compile the code (automatic updates are enabled)
- Restart Tableau to use the extension

## Project Structure

This project was created using the [yo react-webpack](https://github.com/react-webpack-generators/generator-react-webpack#readme) yeoman generator. Most of the interesting code is inside of `./src/components` folder which has the main components of the extension.
