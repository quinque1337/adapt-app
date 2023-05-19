
import '../Global.css'
import Input from './Input';
import Button from './Button';

function login_input(props) {
    return (
        <div className='loginput'>
            <Input  className="message-input" text="Вот тута" />
            <Button icon="arrow_forward"/>
        </div>
    )
}

export default login_input;