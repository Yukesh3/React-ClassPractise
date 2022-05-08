// React JS 
// What is React used for?
// React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

// Framework vs Library =>
// The technical difference between a framework and library lies in a term called inversion of control.
// When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

//npx create-react-app myApp =>
//Create React App (CRA) is the easiest way to get started building React applications. It provides a default setup with a number of core features baked in, including a build system containing a module bundler (webpack) and a transpiler (Babel).

//React vs Angular vs Vue =>
//There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
// React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
// They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
// Each framework is component-based and allows the rapid creation of UI features.
// However, they all have a different structure and architecture.

//Component =>
//Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components


//yarn is faster than npm.

import React from 'react'
import ReactDOM from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <h1>Welcome to React 😁</h1>
)