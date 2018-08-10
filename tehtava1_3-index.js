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
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }


    return (
        <div>
            <Otsikko    name={kurssi} />
            <Sisalto    part1={osa1.nimi} tasks1={osa1.tehtavia}
                        part2={osa2.nimi} tasks2={osa2.tehtavia}
                        part3={osa3.nimi} tasks3={osa3.tehtavia}
            />
            <Yhteensa   tasks1={osa1.tehtavia}
                        tasks2={osa2.tehtavia}
                        tasks3={osa3.tehtavia}
            />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)