import '../Global.css'
import Dialogbutton from './Dialogbutton';

function Dialog(props) {
    return (
        <div className='dialog'>
      <div className='dialognavbar'>
        <div className='user'>
            <div className='aboutuser'>
                <img style={{userSelect: 'none'}} src={props.src} alt={props.nickname}/>
                <div className='navbaruserprofileinfo'>
                    <p className='username'>{props.username}</p>
                    <p className='status'>{props.status}</p>
                </div>
            </div>
            <div className='dialogbuttons'>
                <Dialogbutton icon="search"/>
                <Dialogbutton icon="settings"/>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Dialog;