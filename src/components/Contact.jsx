import '../Global.css'

function Contact(props) {
    return (
        <div className='bgmsg'>
            <img src={props.src} alt={props.nickname}/>
            <div className='msgcon'>
                <div className='parasha'>
                    <p className='nickname'>{props.nickname}</p>
                    <p className='timemsg'>{props.timemsg}</p>
                </div>
                <p className='lastmsg'>{props.lastmsg}</p>
            </div>
        </div>
    )
}

export default Contact;