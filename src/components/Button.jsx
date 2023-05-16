import '../Global.css'

function Button(props) {
    return (
        <button className="button">
            { props.icon ?
            <span className="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
            {props.text}
        </button>
    )
}

export default Button;