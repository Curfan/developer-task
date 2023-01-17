import ImageButton from "./ImageButton"
import Input from "./Input"
import PasswordInput from "./PasswordInput"
import PrivacyCheck from "./PrivacyCheck"
import PrimaryButton from "./PrimaryButton"
import TextBtn from './TextBtn'

function Popup(){
    return(
        <div className="popup">
            <div className="backbtn-content">
                <TextBtn text="Back" />
            </div>
            <div className="popup-content mg-t-32">
                <h2>Start from free</h2>
                <h1 className="mg-t-8">Create an account</h1>
                <div className="btnRow-content mg-t-16">
                    <ImageButton text='Sign up with Google' url="https://svgshare.com/i/pXv.svg" iconname='google'></ImageButton>
                    <ImageButton text='Sign up with Facebook' url="https://svgshare.com/i/pX0.svg" iconname='facebook'></ImageButton>
                </div>
                <div className="hint-content mg-t-16">
                    <h3>Or use your email for registration</h3>
                    <div className="line"></div>
                </div>
                <div className="input-content mg-t-24">
                    <div className="name">
                        <Input type='text' text='First Name'></Input>
                        <Input type='text' text='Last Name'></Input>
                    </div>
                    <div className="mail mg-t-16">
                    <Input type='emial' text='Email'></Input>
                        {/* <MailInput></MailInput> */}
                    </div> 
                    <div className="password mg-t-16">
                        <PasswordInput></PasswordInput>    
                    </div>       
                </div>
                <div className="privacy-content mg-t-24">
                        <PrivacyCheck></PrivacyCheck>
                </div>
                <div className="primaryButton-content mg-t-32">
                    <PrimaryButton></PrimaryButton>
                </div>
                <h4 className="logInHint mg-t-16">Already have an account?<a> Log in</a></h4>

            </div>
        </div>
    )
}
export default Popup;