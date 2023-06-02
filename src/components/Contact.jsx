import '../Global.css'

function Contact(props) {
    return (
        <div className='bgmsg'>
            <img style={{userSelect: 'none'}} src={props.src} alt={props.nickname}/>
            <div className='msgcon'>
                <div className='parasha'>
                    <p className='nickname'>{props.nickname}</p>
                    <p className='timemsg'>{props.timemsg}</p>
                </div>
                <div className='msgtext'>
                    <p className='lastmsg'>{props.lastmsg}</p>
                    {props.msgcounter !== 0 ? <p className='msgcounter'>{props.msgcounter}</p> : ''}
                </div>
            </div>
        </div>
    )
}

export default Contact;