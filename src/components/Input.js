
function Input(prop){
    return(
        <div className="input-box">
            <input type={prop.type} required/>
            <span>{prop.text}</span>
        </div>
    )
}
export default Input;