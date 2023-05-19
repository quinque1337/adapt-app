import '../Global.css'
import Button from './Button'

function Chat_Settings(props) {
    return (
            <div class="Chatsettingscontainer">
             <Button icon="volume_off" text="Заглушить чат"/>
             <Button icon="delete_sweep" text="Удалить чат"/>
            </div>
    )
}

export default Chat_Settings;