
import Correcticon from "./Correcticon";

function HintText(props){
    return(
        <div className="inputHint mg-t-8">
            <Correcticon status ={props.status}></Correcticon>
            <h4 className={props.status ? 'displayValid' : 'displayInValid'}>{props.text}</h4>
        </div>
    )
}
export default HintText;
