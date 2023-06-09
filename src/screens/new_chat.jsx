import { NavLink } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

function NewChat(props) {

    const [chatName, setChatName] = useState('')
    const [chatCode, setChatCode] = useState('')
    const cookies = new Cookies();

    function create_chat() {
        axios.post('https://blazer321.ru/api/chats/create', {
            token: cookies.get('token'),
            chat_name: chatName
        }).catch((error)=>{
            if (error.response) {
                alert(error.response.data.response)
            } else {
                alert('Ошибка соединения с API')
            }
        })
    }

    function join_chat() {
        axios.post(`https://blazer321.ru/api/chats/${chatCode}/join/`, {
            token: cookies.get('token')
        }).catch((error)=>{
            if (error.response) {
                alert(error.response.data.response)
            } else {
                alert('Ошибка соединения с API')
            }
        })
    }

    return (
        <div className='settings_background'>
            <div className='settingscenter'>
                <div className='settingscenter'>
                    <h2>Добавить чат</h2>
                    <div className="grid-new-chat">
                        <div className="grid-new-chat-element">
                            <Input value={chatName} onChange={(value)=>setChatName(value)} text="Название чата" />
                            <Button className="width100" onClick={()=>{create_chat()}} text="Создать чат" bg="#10BB92" color="#0F494A" fontsize="20px"/>
                        </div>
                        <p className="grid-new-chat-or">или</p>
                        <div className="grid-new-chat-element">
                            <Input value={chatCode} onChange={(value)=>setChatCode(value)} text="Код чата" />
                            <Button className="width100" onClick={()=>{join_chat()}} text="Присоедениться" bg="#10BB92" color="#0F494A" fontsize="20px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewChat;