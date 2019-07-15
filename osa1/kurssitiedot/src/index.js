import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.courseName}</h1>
        </>
    )
}
const Part = (props) => {
    return (
        <>
            <p>
                {props.partName} {props.exercisesName}
            </p>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part partName = {props.part1} exercisesName = {props.exercises1} />
            <Part partName = {props.part2} exercisesName = {props.exercises2} />
            <Part partName = {props.part3} exercisesName = {props.exercises3} />
        </>
    )
}
const Total = (props) => {
    return (
        <>
            <p><b>Number of exercises {props.exercisesTotal}</b></p>
        </>  
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14

    return (
        <div>
            <Header courseName = {course} />
            <Content 
                part1={parts[0].name} exercises1={parts[0].exercises}
                part2={parts[1].name} exercises2={parts[1].exercises}
                part3={parts[2].name} exercises3={parts[2].exercises}
            />
            <Total exercisesTotal = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

