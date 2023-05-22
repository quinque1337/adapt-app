import '../Global.css'
import Login from '../components/Login';

function LogIn(props) {
    return (
        <div className="logIn-Background">
            <div className='logIn-HeaderContainer'>
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
            </div>
            <div className='logIn-Container'>
                <Login label={props.label} setLogin={props.setLogin} />
            </div>
        </div>
    )
}

export default LogIn;