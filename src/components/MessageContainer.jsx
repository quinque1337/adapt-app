import { useEffect, useRef, useState } from 'react';
import '../Global.css'
import Message from './Message';
import Cookies from 'universal-cookie';

function MessageContainer(props) {

    const bottomRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const cookies = new Cookies();
    const [data, setData] = useState(props.messages)
    var old_date = 0
    var old_closely = [0, 0]

    function convert_msg_time(datatime) {
        var date = new Date(datatime * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    }

    function convert_msg_date(datatime) {
        var date = new Date(datatime * 1000);
        var days = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var options = { month: 'long' };
        var date = new Date(`${year}-${month}-${days}`);
        
        var humanMonth = date.toLocaleString('ru-RU', options);

        var month = humanMonth;
        var formattedTime = days + ' ' + month
        return formattedTime
    }

    function use_date(date) {
        date = convert_msg_date(date)
        let super_old_date = old_date
        old_date = date
        return date != super_old_date
    }

    useEffect(()=>{
        // сделайте потом как сообщения сделаете чтобы эта хрень вызывалась когда сообщения все прогрузились, ну типа просто переменную сообщений вниз в список поставьте
        // и еще как нибудь сделайте чтобы до непрочитанного не скроллилось хихи хаха
        bottomRef.current?.scrollIntoView({});
        setScrolled(true)
    })
    
    function getMessages() {
        if (props.messages) {return props.messages} else {return []}
    }

    function has15MinutesPassed(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        return diffInMinutes >= 15;
    }

    function closely_message_check(date, author) {
        var condition_a = author == old_closely[1]
        var condition_b = !has15MinutesPassed(new Date(date * 1000), new Date(old_closely[0] * 1000))
        old_closely = [date, author]
        return condition_a && condition_b
    }

    return (
            <div className='messages'>
            {getMessages().map((message)=>
                <div className='yes'>
                    {use_date(message.datetime) ? <div className='date-container-normal'>
                        {convert_msg_date(message.datetime)}
                    </div> : ''}
                    <Message 
                        closely={closely_message_check(message.datetime, message.user_id)}
                        msg={message.content}
                        time={convert_msg_time(message.datetime)}
                        type={message.type}/>
                </div>
            )}

            <div ref={bottomRef} />
             {/* не удаляйте строчку выше */}
            </div>
    )
}

export default MessageContainer;