import react from "react"
import Summary from "./Summary.js"
import App from "../App.js"
const Result=()=>{
    const [isPlayAgain,setIsPlayAgain]=react.useState(false)
    const clickHandle=()=>{
        setIsPlayAgain(true)
    }
    return(<div>{isPlayAgain?<App />:<div><div className="tickDiv">
    <img src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-94365656.jpg"/>
    </div>
    <div className="resHead">Result</div>
    <div className="resultDisplay">
        <div className="display1">YOU NEED MORE PRACTICE!</div>
        <div className="display2">YOUR SCORE IS 20%</div>
        <div className="display3">
        <div className="questionsData">
        <Summary text="Total number of questions"/>
        <Summary text="Number of attempted questions"/>
        <Summary text="Number of correct answers" />
        <Summary text="Number of wrong answers" />
        </div>
        <div className="score">
        <Summary text="15"/>
        <Summary text="9"/>
        <Summary text="3"/>
        <Summary text="6"/>
        </div>
        </div>
    </div>
    <div className="navBack">
       <button className="playAgain" onClick={clickHandle}>Play Again</button>
       <button className="back">Back To Home</button>
    </div></div>}
    
    </div>)
}
export default Result;