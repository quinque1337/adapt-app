import '../Global.css'
import Button from './Button'

function Chat_Settings(props) {
    return (
            <div class="Chatsettingscontainer">
             <Button icon="person_add" text="Добавить"/>
             <Button icon="delete_sweep" text="Удалить чат"/>
            </div>
    )
}

export default Chat_Settings;