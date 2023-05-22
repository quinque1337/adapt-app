import '../Global.css'
import ButtonN from '../components/ButtonNolog';
import Login from '../components/Login';

function LogIn(props) {



    return (
        <div className="logIn-Background">
            <div className='logIn-HeaderContainer'>
                <h1>{props.h1}, {props.user}!</h1>
                <h2>{props.h2}</h2>
            </div>
            <div className='loginreturn'>
                <Login className='logIn-Container'/>
                <div>
                    <ButtonN className="buttonreturn" user={props.user} />
                </div>
            </div>

        </div>
    )
}

export default LogIn;