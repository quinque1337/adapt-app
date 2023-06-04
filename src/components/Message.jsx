import '../Global.css'

function Message(props) {
    return (
        <div className={'messagecon '+props.type}>
            <div style={props.closely ? {marginTop: -8} : {}} className={'Messagecontainer '+props.type}>
                <p className='msg'>{props.msg}</p>
                <p className='time'>{props.time}</p>
            </div>
        </div>
    )
}

export default Message;