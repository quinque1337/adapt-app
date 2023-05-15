import Dialogbutton from "./Dialogbutton";

function DialogTopBar(props) {
    return (
        <div className='dialognavbar'>
            <div className='user'>
                <div className='aboutuser'>
                    <img style={{ userSelect: 'none' }} src={props.src} alt={props.username} />
                    <div className='navbaruserprofileinfo'>
                        <p className='username'>{props.username}</p>
                        <p className='status'>{props.status}</p>
                    </div>
                </div>
                <div className='dialogbuttons'>
                    <Dialogbutton icon="search" />
                    <Dialogbutton icon="settings" />
                </div>
            </div>
        </div>
    )
}

export default DialogTopBar;