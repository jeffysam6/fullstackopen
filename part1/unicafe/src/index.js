import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Statistics = (props) => {


    const average = (props.good - props.bad)/props.total

    const positive = (props.good/props.total)*100

    

    return (

        <div>
        <h1> statistics </h1>
        <table>
        <tr>
        <td>good</td>  <td>{props.good}</td> 
        </tr>
        <tr>
        <td>neutral</td> <td>{props.neutral} </td>
        </tr>
        <tr>
        <td>bad</td> <td>{props.bad} </td>
        </tr>
        <tr>
        <td>all</td> <td>{props.total}</td>
        </tr>
        <tr>
        <td>average</td> <td> {props.average} </td>
        </tr>
        <tr>
        <td>positive</td> <td>{props.positive}%</td>
        </tr>
        </table>
        </div>
        )
}


const History = (props) => {
  if (props.total == 0) {
    return (
      <div>
      <h1>statistics </h1>
            <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
    <Statistics good={props.good} neutral={props.neutral} bad={props.bad} average={props.average} positive={props.positive} total={props.total} />
    </div>
  )
}

const Button = (props) => {


    return (
    <div>
    <button onClick={() => props.setGood(props.good+1)}>good</button>
    <button onClick={() => props.setNeutral(props.neutral+1)}>neutral</button>
    <button onClick={() => props.setBad(props.bad+1) }>bad</button>
    </div>
    )


}

const App = () => {

    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)

    const total = good + bad + neutral
    const average = (good - bad)/total

    const positive = (good/total)*100




    return (

        <div>
        <h1>give feedback </h1>

        
        <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setBad={setBad} setNeutral={setNeutral} />
        <History good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />


        </div>

        )
}




ReactDOM.render(<App />, document.getElementById('root'));

