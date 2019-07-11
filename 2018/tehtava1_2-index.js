// Tehtävä 1.1 ja 1.2
import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => { 
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.part} {props.tasks}</p>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa part={props.part1} tasks={props.tasks1} />
            <Osa part={props.part2} tasks={props.tasks2} />
            <Osa part={props.part3} tasks={props.tasks3} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.tasks1 + props.tasks2 + props.tasks3} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko    name={kurssi} />
            <Sisalto    part1={osa1} tasks1={tehtavia1}
                        part2={osa2} tasks2={tehtavia2}
                        part3={osa3} tasks3={tehtavia3}
            />
            <Yhteensa   tasks1={tehtavia1}
                        tasks2={tehtavia2}
                        tasks3={tehtavia3}
            />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)