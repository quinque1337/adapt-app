import { useState } from 'react'
import '../Global.css'
import Button from './Button'
import NewWindow from 'react-new-window'
import Cookies from 'universal-cookie';
import axios from 'axios';

function Chat_Settings(props) {

    const [chatCodeWindowOpened, setChatCodeWindowOpened] = useState(false)
    const [chatCode, setChatCode] = useState('Загрузка...')
    const cookies = new Cookies();

    return (
            <div class="Chatsettingscontainer">
                {chatCodeWindowOpened ? <NewWindow
                title="Код чата"
                closeOnUnmount={false}
                features={{width: 300, height: 200}}
                onOpen={()=>{
                    document.getElementById('root').style.filter = 'blur(8px)'
                    document.getElementById('root').style.pointerEvents = 'none'
                    document.getElementById('root').style.userSelect = 'none'
                    axios.post(`https://adapt-messenger.ru/api/chats/${props.chat_id}/get_code`, {token: cookies.get('token')})
                    .then((response)=>{
                        setChatCode(response.data.code)
                    })
                    .catch((error)=>{
                        if (error.response.data.response) {
                            alert(error.response.data.response)
                        } else {alert('Произошла ошибка 11037')}
                    })
                }}
                onUnload={()=>{
                    props.setSettingsOpened(false)
                    document.getElementById('root').style.filter = 'none'
                    document.getElementById('root').style.pointerEvents = ''
                    document.getElementById('root').style.userSelect = ''
                }}>
                    <div className='code-window' style={{margin: 10, color: 'var(--text-color)'}}>
                        <div>
                            <h3>Код чата</h3>
                            <h1>{chatCode}</h1>
                        </div>
                        <Button text="Сгенерировать" fontsize="20px" onClick={()=>{
                            axios.post(`https://adapt-messenger.ru/api/chats/${props.chat_id}/generate_code`,
                            {token: cookies.get('token')})
                            .then((response)=>{
                                setChatCode(response.data.code)
                            })
                            .catch((error)=>{
                                if (error.response.data.response) {
                                    alert(error.response.data.response)
                                } else {alert('Произошла ошибка 11037')}
                            })
                        }}></Button>
                    </div>
                </NewWindow> : ''}
                <Button icon="person_add" text="Добавить" onClick={()=>setChatCodeWindowOpened(true)} />
                <Button icon="delete_sweep" text="Удалить чат"/>
            </div>
    )
}

export default Chat_Settings;
