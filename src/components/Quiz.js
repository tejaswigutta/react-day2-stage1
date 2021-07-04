import react from "react"
import Option from "./Option.js"
import React from "./Result.js"
import ButtonDiv from "./ButtonDiv.js"
import Result from "./Result.js"
function Quiz(){
    const [isQuit,setIsQuit]=react.useState(false)
    const clickHandle=()=>{
        setIsQuit(true)
    }
    return (<div>{isQuit?<Result />:<div className="quiz">
    <div class="questionHead"><h1>QUESTION</h1></div>
    <div className="question"><p>4 of 15</p><p className="p2">Which is the only mammal that can't jump?</p></div>
    <ButtonDiv  name1="Dog" name2="Goat"/>
    <ButtonDiv  name1="Elephant" name2="Lion"/>
    <div class="navOptions">
    <button id="previous">Previous</button>
    <button id="next">Next</button>
    <button id="quit" onClick={clickHandle}>Quit</button>
    </div></div>}</div>)
    

    
    
    
}
export default Quiz