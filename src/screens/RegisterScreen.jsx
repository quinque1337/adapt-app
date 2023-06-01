
import '../Global.css'
import Register from '../components/Register';
import Button from '../components/Button';


function RegisterScreen(props) {

    return (
            <div className="logIn-Background">
                <div className='logIn-HeaderContainer'>
                        <h1>{props.h1}</h1>
                        <h2>{props.h2}</h2>
                    </div>
                    <Register setName={props.setName} setNickname={props.setNickname} setPassword={props.setPassword}/>
                    <div className='regbutton'>
                        <Button icon="arrow_back" onClick={()=>{props.returnRegister(true)}}/>
                        <Button text="Я готов!" bg="#10BB92" color="#0F494A" fontsize="20px" onClick={()=>{props.setRegister(true)}}/>
                    </div>
                </div>
    )
}

export default RegisterScreen;