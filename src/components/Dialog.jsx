import '../Global.css'
import ChatSettings from './Chat_Settings';
import DialogTopBar from './DialogTopBar';
import MessageContainer from './MessageContainer';
import Messageinput from './Messageinput';
import ChatDate from './Chat_Date'

function Dialog(props) {
    return (
        <div className='dialog'>
            <DialogTopBar 
                username={props.username}
                status={props.status}
                src={props.src}
                color="#6f6f6f"
            />
            {/* <ChatSettings/> */}
            {/* <ChatDate/> */}
            <MessageContainer messages={props.messages} />
            <Messageinput text={props.text} chat_info={props.chat_info}/>
        </div>
    )
}

export default Dialog;