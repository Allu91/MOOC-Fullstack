import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.courseName}</h1>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <p>
                {props.partName} {props.exercisesName}
            </p>
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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header courseName = {course} />
            <Content partName = {part1} exercisesName = {exercises1} />
            <Content partName = {part2} exercisesName = {exercises2} />
            <Content partName = {part3} exercisesName = {exercises3} />
            <Total exercisesTotal = {exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
