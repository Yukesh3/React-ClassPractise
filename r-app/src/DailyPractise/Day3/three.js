//Fragment => A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

//What is JSX?
//JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

//What is Babel and how does it work?
//Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.

//Webpack =>
//Webpack is a tool that lets you compile JavaScript modules, also known as module bundler. Given a large number of files, it generates a single file (or a few files) that run your app. It can perform many operations: helps you bundle your resources

//Component

//What is the function of the component?
//Conceptually a component is a JavaScript class or function that accepts inputs which are properties(props) and returns a React element that describes how a section of the User Interface should appear.

//Build => Effects => Render => ok?not
//controls these 4 features inside Class have 'life cycle'
// and function have 'Hooks'.

// JSX => <html>{JS}</html>
//All the elements should be closed


import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Nav = (props)=>{
    return <h1>Navbar {props.name} </h1>
}

const Time=()=>{
    const time = new Date().toLocaleTimeString();
     return <h1>Time : {time}</h1>
}

setInterval(()=>{
    root.render(
        <>
        <Nav name='Yukesh'/>
        <h1>Second Class 🔥</h1> 
        <Time/>
    
        </>
    )

},1000)


// <h1>Second Class 🔥</h1>  (Babel) => React.createElement("h1", nul "Second Class \uD83D\uDD25")

//Function wit return is clled component

//All files are send into a server as a single index.js file. This is done by webpack.

//Css 