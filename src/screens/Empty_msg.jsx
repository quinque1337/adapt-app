import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Input from "../components/Input";
import Contact from "../components/Contact";
import Button from "../components/Button";
import lines from "../images/lines.png"
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import Dialog from "../components/Dialog";
import Settingscomp from "../components/Settings_comp"

function Messenger(props) {

    const [contacts, setContacts] = useState([]);
    const [chatInfo, setChatInfo] = useState({'avatar': '', 'name': '', 'status': ''});
    const cookies = new Cookies();
    const [clientState, setClientState] = useState({});
    const [messages, setMessages] = useState([]);
    const [chat_edited, editChat] = useState();
    const [connecting, setConnecting] = useState('flex');

    useEffect(()=>{
        let opened_chat_id = undefined
        try{
            opened_chat_id = !isNaN(window.location.hash.split('#/')[1]) ? Number(window.location.hash.split('#/')[1]) : undefined
        } catch {
            opened_chat_id = null
        }
        axios.post('https://blazer321.ru/api/chats/get', {
            token: cookies.get('token'),
            opened_chat_id: opened_chat_id,
            client_state: clientState
        }).then((response)=>{
            setConnecting('none')
            setClientState(response.data)
            setContacts(response.data.last_chats)
            setMessages(response.data.opened_chat_history)
            if (response.data.chat_info != null) {setChatInfo(response.data.chat_info)}
        }).catch((error)=>{
            if (error.response) {
                alert(error.response.data.response)
              } else {
                  setConnecting('flex')
              }
        })
    }, [messages])

    return (
        <HashRouter><div id=''>
            <div className="connecting fadein" style={{display: connecting}}>Подключение...</div>
            <div id='top' className='top'>
                <NavLink to="/settings"><Button icon="settings" /></NavLink>
                <Input icon="search" text="Поиск" />
            </div>
            <div id='contacts' className='concha'>
                {contacts.map((contact)=>
                    <NavLink to={"/"+contact.id} onClick={()=>{setMessages([])}}><Contact
                    src={contact.avatar}
                    nickname={contact.name}
                    lastmsg={contact.last_message}
                    timemsg={'00000'}
                    msgcounter={contact.new_messages} /></NavLink>
                )}
            </div>
        </div>
        <Routes>
            <Route
                exact
                path='/'
                element={
                    <div className="emptybackground">
                        <p>Откройте чат</p>
                        <img alt='' src={lines} className="emptybgimage"></img>
                    </div>
                }
            />
            <Route
                path='/:id'
                element={
                    <Dialog
                        src={chatInfo.avatar}
                        username={chatInfo.name}
                        status={chatInfo.status}
                        text="Писать суда"
                        messages={messages}
                        chat_info={chatInfo}
                    />
                }
            />
            <Route
                path="/settings"
                element={
                    <Settingscomp version={props.version}/>
                }
            ></Route>
        </Routes>
        </HashRouter>
    )
}

export default Messenger;