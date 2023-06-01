import '../Global.css'
import Input from './Input';

function Register(props) {

    return (
        <div className='register'>
            <Input className="message-input" icon="Fingerprint" text="Николай Андреевич" onChange={props.setNickname}/>
            <Input className="message-input" icon="Pin" text="*************" onChange={props.setPassword}/>
            <Input label={props.label} className="message-input" icon="Pin" text="************* еще раз" />
        </div>
    )
}


export default Register;