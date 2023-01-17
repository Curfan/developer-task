
function TextBtn(prop){
    return(
        <div className="textbtn">
            <img src="https://svgshare.com/i/pWY.svg" alt="" />
            <span>{prop.text}</span>
            <div className="underline"></div>
        </div>
    )
}
export default TextBtn;