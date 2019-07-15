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
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header courseName = {course.name} />
            <Content 
                part1={course.parts[0].name} exercises1={course.parts[0].exercises}
                part2={course.parts[1].name} exercises2={course.parts[1].exercises}
                part3={course.parts[2].name} exercises3={course.parts[2].exercises}
            />
            <Total exercisesTotal = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

