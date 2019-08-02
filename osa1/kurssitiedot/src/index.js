import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [ counter, SetCounter] = useState(0)

    setTimeout(
        () => SetCounter(counter + 1),
        1000
    )
    return (
        <div>{counter}</div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
