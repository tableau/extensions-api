# React Tutorial

This folder contains a version of our finalized tutorial written in React instead of using jQuery and more traditional javascript techniques. The demo is functionally the same, but highlights some best practices and techniques for building an extensions using React.

## Setup

- Navigate to this folder in a command prompt.
- Run `npm install`.
- Run `npm start` to start the web server and compile the code (automatic updates are enabled).
- Open Tableau, add a new extension object, and locate the `TutorialReact.trex` file in this folder to use the extension.

## Project Structure

This project was created using the [yo react-webpack](https://github.com/react-webpack-generators/generator-react-webpack#readme) yeoman generator. Most of the interesting code is inside of `./src/components` folder which has the main components of the extension.
