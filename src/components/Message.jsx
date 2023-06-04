import '../Global.css'

function Message(props) {
    return (
        <div className={'messagecon '+props.type}>
            {props.type !== 'me' ? <img src={props.ava} class={"msgava" + (props.closely ? 'opacity0' : '')}></img> : ''}
            <div style={props.closely ? {marginTop: -8} : {}} className={'Messagecontainer '+props.type}>
                <p className='msg'>{props.msg}</p>
                <p className='time'>{props.time}</p>
            </div>
        </div>
    )
}

export default Message;