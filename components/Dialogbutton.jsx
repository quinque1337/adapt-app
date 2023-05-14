import '../Global.css'

function Dialogbutton(props) {
    return (
        <button className="dbutton">
            { props.icon ?
            <span class="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
        </button>
    )
}

export default Dialogbutton;