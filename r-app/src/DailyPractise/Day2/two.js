//DOM =>
//The Document Object Model (DOM) is a programming interface for web documents. 
//It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//Virtual DOM =>
//The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

//Virtual DOM vs Real DOM
//A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.

//npm => What is npm in ReactJS?
//npm is an abbreviation used for the node package manager. It is a package manager for JavaScript. It is the default package manager that comes with NodeJS when you install it.

import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <h1>Second Class 👌</h1>
)