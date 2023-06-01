import { HashRouter, NavLink } from "react-router-dom";
import Input from "../components/Input";
import Contact from "../components/Contact";
import Button from "../components/Button";
import lines from "../images/lines.png"
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

function Messenger(props) {

    const [contacts, setContacts] = useState([]);
    const cookies = new Cookies();
    const [clientState, setClientState] = useState({});

    useEffect(()=>{
        axios.post('https://blazer321.ru/api/chats/get', {
            token: cookies.get('token'),
            opened_chat_id: undefined,
            client_state: clientState
        }).then((response)=>{
            setClientState(response.data)
            setContacts(response.data.last_chats)
        }).catch((error)=>{
            if (error.response) {
                alert(error.response.data.response)
              } else {
                  alert('Ошибка соединения с API')
              }
        })
    })

    return (
        <HashRouter><div id=''>
            <div id='top' className='top'>
                <NavLink to="/settings"><Button icon="settings" /></NavLink>
                <Input icon="search" text="Поиск" />
            </div>
            <div id='contacts' className='concha'>
                {contacts.map((contact)=>
                    <NavLink to="/"><Contact
                    src={contact.avatar}
                    nickname={contact.name}
                    lastmsg={contact.last_message}
                    timemsg={'00000'}
                    msgcounter={contact.new_messages} /></NavLink>
                )}
            </div>
        </div>
        <div className="emptybackground">
            <p>Откройте чат</p>
            <img alt='' src={lines} className="emptybgimage"></img>
        </div>
        </HashRouter>
    )
}

export default Messenger;