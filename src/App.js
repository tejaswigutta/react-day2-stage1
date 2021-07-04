import logo from './logo.svg';
import './App.css';
import react from "react"
import Quiz from "./components/Quiz.js"

function App() {
  const [isPlay,setIsPlay]=react.useState(false)
  function clickHandle(){
    setIsPlay(true)
  }
  return (
      <div>
      {isPlay?<Quiz />:<div class="home"><h1 className="quizHead">QUIZ APP</h1><button onClick={clickHandle}className="playButton">PLAY</button></div>}
      </div>
   
  );
}

export default App;
