import '../Global.css'

function Input(props) {
    return (
        <div className='bgsearch'>
            { props.icon ?
            <span class="material-symbols-outlined">
                {props.icon}
            </span> : ''
            }
            <input onInput={props.onInput} className={props.className} placeholder={props.text} />
        </div>
    )
}

export default Input;