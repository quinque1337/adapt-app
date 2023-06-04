import Dialogbutton from "./Dialogbutton";
import Input from "./Input";

function DialogTopBar(props) {
    return (
        <div className='dialognavbar'>
            <div className='user'>
                <div className='aboutuser'>
                    <img style={{ userSelect: 'none' }} src={props.src} alt={props.username} />
                    <div className='navbaruserprofileinfo'>
                        <p className='username'>{props.username}</p>
                        <p className='status'  style={{ color: props.color}}>{props.status}</p>
                    </div>
                </div>
                <div className='dialogbuttons'>
                    <Input icon="search"/>
                    <Dialogbutton icon="settings" onClick={()=>{
                        props.settingsOpened ? props.setSettingsOpened(false) : props.setSettingsOpened(true)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default DialogTopBar;