
import '../Global.css'
import Input from './Input';
import Button from './Button';
import { useState } from 'react';


function Login_input(props) {

    const [login, setLogin] = useState(undefined)
    
    return (
        <div className='loginput'>
            <Input label={props.label} className="message-input" text="Вот тута" onChange={setLogin} />
            <Button icon="arrow_forward" onClick={()=>{props.setLogin(login)}} />
        </div>
    )
}

export default Login_input;