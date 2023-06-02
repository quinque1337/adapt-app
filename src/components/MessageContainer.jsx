import { useEffect, useRef, useState } from 'react';
import '../Global.css'
import Message from './Message';
import Cookies from 'universal-cookie';

function MessageContainer(props) {

    const bottomRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const cookies = new Cookies();

    function convert_msg_time(datatime) {
        var date = new Date(datatime * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    }

    // useEffect(()=>{
    //     // сделайте потом как сообщения сделаете чтобы эта хрень вызывалась когда сообщения все прогрузились, ну типа просто переменную сообщений вниз в список поставьте
    //     // и еще как нибудь сделайте чтобы до непрочитанного не скроллилось хихи хаха
    //     bottomRef.current?.scrollIntoView({});
    //     setScrolled(true)
    // }, [scrolled])
    
    function getMessages() {
        if (props.messages == cookies.get("last_messages_state")) {
        } else {
            console.log(props.messages == cookies.get("last_messages_state"))
            bottomRef.current?.scrollIntoView({})
        }
        cookies.set("last_messages_state", props.messages.toString())
        if (props.messages) {return props.messages} else {return []}
    }

    return (
            <div className='messages'>
            {getMessages().map((message)=>
                    <Message 
                    msg={message.content}
                    time={convert_msg_time(message.datetime)}
                    type={message.type}/>
            )}

            <div ref={bottomRef} />
             {/* не удаляйте строчку выше */}
            </div>
    )
}

export default MessageContainer;