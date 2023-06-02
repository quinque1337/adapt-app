import '../Global.css'

function Dialogbutton(props) {
    return (
        <button className={"dbutton "+props.className} onClick={()=>{props.onClick()}}>
            { props.icon ?
            <span className="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
        </button>
    )
}

export default Dialogbutton;