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
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko    name={kurssi.nimi} />
            <Sisalto    part1={kurssi.osat[0].nimi} tasks1={kurssi.osat[0].tehtavia}
                        part2={kurssi.osat[1].nimi} tasks2={kurssi.osat[1].tehtavia}
                        part3={kurssi.osat[2].nimi} tasks3={kurssi.osat[2].tehtavia}
            />
            <Yhteensa   tasks1={kurssi.osat[0].tehtavia}
                        tasks2={kurssi.osat[1].tehtavia}
                        tasks3={kurssi.osat[2].tehtavia}
            />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)