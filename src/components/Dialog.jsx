import '../Global.css'
import ChatSettings from './Chat_Settings';
import DialogTopBar from './DialogTopBar';
import MessageContainer from './MessageContainer';
import Messageinput from './Messageinput';
import ChatDate from './Chat_Date'
import { useState } from 'react';

function Dialog(props) {

    const [settingsOpened, setSettingsOpened] = useState(false)

    return (
        <div className='dialog'>
            <DialogTopBar 
                username={props.username}
                status={props.status}
                src={props.src}
                color="#6f6f6f"
                setSettingsOpened={setSettingsOpened}
                settingsOpened={settingsOpened}
            />
            {settingsOpened ? <ChatSettings chat_id={props.chat_info.id} /> : ''}
            {/* <ChatDate/> */}
            <MessageContainer messages={props.messages} />
            <Messageinput text={props.text} chat_info={props.chat_info}/>
        </div>
    )
}

export default Dialog;