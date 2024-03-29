import '../Global.css'

function Button(props) {
    return (
        <button onClick={props.onClick} className={"button "+props.className} style={{
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