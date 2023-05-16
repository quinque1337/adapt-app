import '../Global.css'

function LogIn(props) {
    return (
        <div className="logIn-Background">
            <div className='logIn-HeaderContainer'>
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
            </div>
        </div>
    )
}

export default LogIn;