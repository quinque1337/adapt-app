import { useState } from 'react';
import '../Global.css'
import Dialogbutton from './Dialogbutton';
import Input from './Input';
import axios from 'axios';
import Cookies from 'universal-cookie';

function Messageinput(props) {
    const cookies = new Cookies();
    const [inputText, setInputText] = useState("");
    return (
        <div className='messageinputcontainer'>
            <Dialogbutton className="buttondialog" icon="attach_file"></Dialogbutton>
            <Input onInput={(inp) => {setInputText(inp.target.value)}} className="message-input" text="Речевой поток начинается здесь..." />
            <Dialogbutton className="buttondialog" icon="mood"></Dialogbutton>
            {inputText ? <Dialogbutton className="buttondialog fadein" icon="send" onClick={()=>{
                axios.post(`https://blazer321.ru/api/chats/${props.chat_info.id}/send`, {
                    content: inputText,
                    token: cookies.get('token')
                  }).catch((error)=>{
                    if (error.response) {
                      alert(error.response.data.response)
                    } else {
                      alert('Ошибка соединения с API')
                    }
                  })
            }}></Dialogbutton>: ''}
           {/*<Dialogbutton className="buttondialog" icon="mic"></Dialogbutton>*/}    
        </div>
    )
}

export default Messageinput;