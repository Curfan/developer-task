
function Svg(props){
    if(props.text == 'google'){
        return(
            <svg className="fb" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 6.4V9.6H13.0264C12.3656 11.4624 10.5864 12.8 8.5 12.8C5.8536 12.8 3.7 10.6464 3.7 8C3.7 5.3536 5.8536 3.2 8.5 3.2C9.6472 3.2 10.7512 3.6112 11.6088 4.3584L13.7112 1.9456C12.2712 0.6912 10.4216 0 8.5 0C4.0888 0 0.5 3.5888 0.5 8C0.5 12.4112 4.0888 16 8.5 16C12.9112 16 16.5 12.4112 16.5 8V6.4H8.5Z" fill="#3C71FF"/>
            </svg>

            )
    }else if(props.text == 'facebook'){
        return(
            <svg className="fb" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.16466 2.65667H8.62533V0.112667C8.37333 0.078 7.50666 0 6.49733 0C4.39133 0 2.94867 1.32467 2.94867 3.75933V6H0.624666V8.844H2.94867V16H5.798V8.84467H8.028L8.382 6.00067H5.79733V4.04133C5.798 3.21933 6.01933 2.65667 7.16466 2.65667V2.65667Z" fill="#3C71FF"/>
            </svg>

            )
    }
}
export default Svg;