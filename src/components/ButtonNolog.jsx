import '../Global.css'

function ButtonNolog(props) {
    return (
        <button className="buttonreturn">
            Я не {props.user}
        </button>
    )
}
export default ButtonNolog;