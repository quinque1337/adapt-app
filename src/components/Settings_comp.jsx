
import '../Global.css'
import Input from "../components/Input"
import Button from "../components/Button"

function settings(props) {
    return (
        <div className='settings_background'>
            <div className='settingscenter'>
                <div className='settingscenter'>
                    <h2>Настройки</h2>
                <div className='setname'>
                    <p>Имя</p>
                    <Input bg='var(--bg-setname-color)' value="Егор" />
                </div>
                <div className='setava'>
                    <p>Аватарка</p>
                    <div className='rightsettings'>
                        <img alt='' src="https://sun1-95.userapi.com/s/v1/ig2/XK9hovjBHg2Ny5TkQYMGShrq7LZwmBLH_oBspDku735lePg5KvbIHhb5bqdSapkoldRKGkjoLuSJrGm3I5CUF904.jpg?size=50x50&quality=95&crop=1079,512,593,593&ava=1"/>
                        <Button text="Загрузить..." fontsize="20px"/>
                    </div>
                </div>
                <div className='statistic'>
                    <p>Сообщений отправлено</p>
                    <p className='msgcount'>12</p>
                </div>
                <div className='statistic'>
                    <p>Adapt Desktop</p>
                    <p className='msgcount'>{props.version}</p>
                </div>
                <p class="withlove">From Adapt Team with love</p>
            </div>
            <Button text="Сохранить" bg="#10BB92" color="#0F494A" fontsize="20px"/>
            </div>
        </div>
    )
}

export default settings;