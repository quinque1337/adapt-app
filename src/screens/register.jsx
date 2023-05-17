import '../Global.css'
import Register from '../components/Register';
import Button from '../components/Button';


function register(props) {
    return (
            <div className="logIn-Background">
                <div className='logIn-HeaderContainer'>
                        <h1>{props.h1}</h1>
                        <h2>{props.h2}</h2>
                    </div>
                    <Register/>
                    <div className='regbutton'>
                        <Button icon="arrow_back"/>
                        <Button text="Я готов!" bg="#10BB92" color="#0F494A" fontsize="20px"/>
                    </div>
                </div>
    )
}

export default register;