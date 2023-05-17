import '../Global.css'

function Button(props) {
    return (
        <button className="button" style={{
            backgroundColor: props.bg, 
            color: props.color, fontSize: props.fontsize
            }}>
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