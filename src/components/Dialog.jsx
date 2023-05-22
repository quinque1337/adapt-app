import '../Global.css'
import Chat_Settings from './Chat_Settings';
import DialogTopBar from './DialogTopBar';
import MessageContainer from './MessageContainer';
import Messageinput from './Messageinput';
import Chat_Date from './Chat_Date'

function Dialog(props) {
    return (
        <div className='dialog'>
            <DialogTopBar 
                username={props.username}
                status={props.status}
                src={props.src}
                color="#6f6f6f"
            />
            <Chat_Settings/>
            <Chat_Date/>
            <MessageContainer />
            <Messageinput text={props.text}/>
        </div>
    )
}

export default Dialog;