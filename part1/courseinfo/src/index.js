// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
console.log(props.course.name)
return (
<>
<h1>{props.course.name}</h1>
</>

 )
}

const Part = (props) => {

    return (
        <>
        <p>{props.part} {props.exercises}</p>
        </>
        )
}

const Content = (props) => {

  

    return (
        <div>
        <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises} />
        <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises} />
        <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises} />
        </div>

    )

}

const Total = (props) => {

    console.log(props.parts.parts[0])
    return (
        <>
         <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises} </p>
        </>

        )

}



const App = () => {

  const course = 
  { 
    name : 'Half Stack application development',

  parts : [

    {
     name: 'Fundamentals of React',
     exercises: 10
    },
    {
    name :'Using props to pass data',
    exercises : 7
    },
    { 
    name : 'State of a component',
    exercises : 14
    }

  ]
}

  return (
    <div>
    <Header course={course} />
    <Content parts = {course}  />
    <Total parts={course} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))