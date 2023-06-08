import '../Global.css'

function ButtonNolog(props) {
    return (
        <button className="buttonreturn" onClick={props.onClick}>
            Я не {props.user}
        </button>
    )
}
export default ButtonNolog;