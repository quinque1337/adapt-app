import '../Global.css'
import Input from './Input';

function Register(props) {

    return (
        <div className='register'>
            <Input label="Максимум 30 символов" className="message-input" icon="Fingerprint" text="Николай Андреевич" onChange={props.setNickname}/>
            <Input label="Минимум 5 символов" className="message-input" icon="Pin" text="*************" onChange={props.setPassword}/>
            <Input label="Неправильный повтор пароля" className="message-input" icon="Pin" text="************* еще раз" />
        </div>
    )
}


export default Register;