import Svg from "./Svg"

function ImageButton(props){
    return(
        <button className="btn">
            <Svg text={props.iconname} ></Svg>
            <h4>{props.text}</h4>
        </button>
    )
}
export default ImageButton;