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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

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
                part1={part1.name} exercises1={part1.exercises}
                part2={part2.name} exercises2={part2.exercises}
                part3={part3.name} exercises3={part3.exercises}
            />
            <Total exercisesTotal = {part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

