import { useState } from 'react';
import '../Global.css'

function Input(props) {
    
    const [value, setValue] = useState(props.value ? props.value : '');

    return (
        <div className='width100'><div className='bgsearch' style={{backgroundColor: props.bg}}>
            { props.icon ?
            <span className="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
            <input value={value} onChange={(v)=>{setValue(v.target.value);props.onChange(v.target.value)}} onInput={props.onInput} className={props.className} placeholder={props.text} />
        </div>
        {props.label ? <label>{props.label}</label> : ''}
        </div>
    )
}

export default Input;