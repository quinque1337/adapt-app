import { useEffect, useState } from 'react';
import '../Global.css'

function Input(props) {
    
    const [value, setValue] = useState(props.value ? props.value : '');

    useEffect(()=>{
        setValue(props.value)
    }, [props.value])

    return (
        <div className='width100'><div className={'bgsearch '+props.className2} style={{backgroundColor: props.bg}}>
            { props.icon ?
            <span className="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
            <input type={props.type} value={value} onKeyDown={(a)=>{try{props.onKeyDown(a)}catch{}}} onChange={(v)=>{setValue(v.target.value);try{props.onChange(v.target.value)}catch{}}} onInput={props.onInput} className={props.className} placeholder={props.text} />
        </div>
        {props.label ? <label>{props.label}</label> : ''}
        </div>
    )
}

export default Input;