import '../Global.css'
import DialogTopBar from './DialogTopBar';
import MessageContainer from './MessageContainer';
import Messageinput from './Messageinput';

function Dialog(props) {
    return (
        <div className='dialog'>
            <DialogTopBar 
                username={props.username}
                status={props.status}
                src={props.src}
            />
            <MessageContainer />
            <Messageinput text={props.text}/>
        </div>
    )
}

export default Dialog;