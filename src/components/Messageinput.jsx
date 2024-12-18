import { useState } from 'react';
import '../Global.css'
import Dialogbutton from './Dialogbutton';
import Input from './Input';
import axios from 'axios';
import Cookies from 'universal-cookie';

function Messageinput(props) {
    const cookies = new Cookies();
    const [inputText, setInputText] = useState("");

    function send() {
      if (inputText.trim() == '') {return}
      axios.post(`https://adapt-messenger.ru/api/chats/${props.chat_info.id}/send`, {
        content: inputText,
        token: cookies.get('token')
      })
      .then(()=>{
        setInputText('')
      })
      .catch((error)=>{
        if (error.response) {
          alert(error.response.data.response)
        } else {
          alert('Ошибка соединения с API')
        }
      })
    }

    return (
        <div className='messageinputcontainer'>
            <Dialogbutton className="buttondialog" icon="attach_file"></Dialogbutton>
            <Input onKeyDown={(a)=>{
              if (a.code == 'Enter') {send()}
            }} value={inputText} onInput={(inp) => {setInputText(inp.target.value)}} className2='message-input-container' className="message-input" text="Речевой поток начинается здесь..." />
            <Dialogbutton className="buttondialog" icon="mood"></Dialogbutton>
            {inputText ? <Dialogbutton className="buttondialog fadein" icon="send" onClick={()=>{
              send()
            }}></Dialogbutton>: ''}
           {/*<Dialogbutton className="buttondialog" icon="mic"></Dialogbutton>*/}    
        </div>
    )
}

export default Messageinput;
