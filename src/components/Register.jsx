import '../Global.css'
import Input from './Input';

function login_input(props) {
    return (
        <div className='register'>
            <Input className="message-input" icon="Fingerprint" text="Николай Андреевич"/>
            <Input label="Только латиница!" className="message-input" icon="alternate_email" text="nikandr" />
            <Input label="Минимум 5 символов" className="message-input" icon="Pin" text="*************" />
            <Input label="Неправильный повтор пароля" className="message-input" icon="Pin" text="************* еще раз" />
        </div>
    )
}


export default login_input;