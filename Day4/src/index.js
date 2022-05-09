import React from 'react'
import ReactDOM from 'react-dom'
import App from './Appbar'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const TaskBar=()=>{
    return (
        <>
        <h1 style={{color:'red', backgroundColor:'red'}}>First Text</h1>
        <h1>Second Text</h1>
        </>
    )
}


root.render(
<>
<TaskBar/>
<App/>
</>
)

//CSS =>  !important > id > class > tagName

//casscadding means we can have multi styling sheet and it can connceted to each other


