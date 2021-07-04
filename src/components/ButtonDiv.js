import react from "react"
import Option from "./Option.js"
const ButtonDiv=({name1,name2})=>{
    return <div className="buttonDiv"><Option name={name1}/><Option name={name2}/></div>
}
export default ButtonDiv