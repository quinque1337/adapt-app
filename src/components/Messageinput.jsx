import { useState } from 'react';
import '../Global.css'
import Dialogbutton from './Dialogbutton';
import Input from './Input';

function Messageinput(props) {
    const [inputText, setInputText] = useState("");
    return (
        <div className='messageinputcontainer'>
            <Dialogbutton className="buttondialog" icon="attach_file"></Dialogbutton>
            <Input onInput={(inp) => {setInputText(inp.target.value)}} className="message-input" text="Речевой поток начинается здесь..." />
            <Dialogbutton className="buttondialog" icon="mood"></Dialogbutton>
            {inputText ? <Dialogbutton className="buttondialog fadein" icon="send"></Dialogbutton>: ''}
           {/*<Dialogbutton className="buttondialog" icon="mic"></Dialogbutton>*/}    
        </div>
    )
}

export default Messageinput;