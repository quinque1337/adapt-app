import { useEffect, useRef, useState } from 'react';
import '../Global.css'
import Message from './Message';
import Chat_Date from './Chat_Date'
function MessageContainer(props) {

    const bottomRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        // сделайте потом как сообщения сделаете чтобы эта хрень вызывалась когда сообщения все прогрузились, ну типа просто переменную сообщений вниз в список поставьте
        // и еще как нибудь сделайте чтобы до непрочитанного не скроллилось хихи хаха
        bottomRef.current?.scrollIntoView({});
        setScrolled(true)
    }, [scrolled])
    
    return (
            <div className='messages'>
            <Message
            msg="Lorem ipsum dolor sit amet."
            time="1:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="2:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="3:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="4:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="5:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="6:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="7:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="8:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="12:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet."
            time="9:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="10:00"/>
                        <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="11:00"
            type="me"/>
        
                        <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="1:00"
            type="me"/>
                                    <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="1:00"
            type="me"/>
                                    <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.и"
            time="1:00"
            type="me"/>
                                    <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="1:00"
            type="me"/>
                                    <Message
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            time="1:00"
            type="me"/>

            <div ref={bottomRef} />
             {/* не удаляйте строчку выше */}
            </div>
    )
}

export default MessageContainer;