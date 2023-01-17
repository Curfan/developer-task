import { useState } from "react";
import HintText from './HintText'
const show = 'view-off';
function PasswordInput(){

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);

      };
      const [charmin,setMessage] = useState(false);
      const [onenumber,setOneMessage] = useState(false);
      const handleValidation = (e) => {
        const regExpChar = /^[A-Za-z\d]{8,}$/;
        const regExpOneNumber = /\d/;
        if(!regExpChar.test(e.target.value)){
            setMessage(false);
            console.log('yo')
        }else{
            setMessage(true);
            console.log(charmin);
        }
        if(!regExpOneNumber.test(e.target.value)){
            setOneMessage(false);
            console.log('yo3') 
        }else{
            setOneMessage(true);
            console.log(onenumber);
        }
      };
   

    return(
        <>
        <div className="input-box">
            <input type={passwordShown ? "text" : "password"} onChange={handleValidation} required/>
            <span>Password</span>
             <button onClick={togglePassword}>
             <svg className={passwordShown ? "view-on" : "view-off"} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8792 9.63046C18.7095 9.39826 14.6652 3.94507 9.49991 3.94507C4.33461 3.94507 0.290122 9.39827 0.120569 9.63024C-0.0401895 9.85052 -0.0401895 10.1493 0.120569 10.3696C0.290122 10.6018 4.33461 16.055 9.49991 16.055C14.6652 16.055 18.7095 10.6017 18.8792 10.3698C19.0402 10.1495 19.0402 9.85052 18.8792 9.63046ZM9.49991 14.8022C5.69511 14.8022 2.39976 11.1828 1.42426 9.99959C2.39849 8.81531 5.68695 5.19781 9.49991 5.19781C13.3045 5.19781 16.5996 8.81657 17.5756 10.0004C16.6013 11.1847 13.3129 14.8022 9.49991 14.8022Z" fill="#ABABAB"/>
                    <path d="M9.49991 6.24176C7.42765 6.24176 5.74165 7.92775 5.74165 10C5.74165 12.0723 7.42765 13.7583 9.49991 13.7583C11.5722 13.7583 13.2582 12.0723 13.2582 10C13.2582 7.92775 11.5722 6.24176 9.49991 6.24176ZM9.49991 12.5055C8.11833 12.5055 6.99443 11.3816 6.99443 10C6.99443 8.61847 8.11836 7.49454 9.49991 7.49454C10.8815 7.49454 12.0054 8.61847 12.0054 10C12.0054 11.3816 10.8815 12.5055 9.49991 12.5055Z" fill="#ABABAB"/>
                    </svg>
             </button>
        </div>
        <div className={!passwordShown ? 'displayOff hint-list' : 'displayOn hint-list'}>
            <HintText text="8 Characters min." status={charmin}></HintText>
            <HintText text="One number" status={onenumber}></HintText>
        </div>
        </>
    )
}
export default PasswordInput;