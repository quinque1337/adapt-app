
import '../Global.css'
import Input from './Input';
import Button from './Button';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Login_input(props) {

    const [login, setLogin] = useState(undefined)
    
    return (
        <div className='loginput'>
            <Input className="message-input" text="Вот тута" onChange={setLogin} />
            <Button icon="arrow_forward" onClick={()=>{props.setLogin(login)}} />
        </div>
    )
}

export default Login_input;