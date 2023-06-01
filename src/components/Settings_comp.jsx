
import '../Global.css'
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from 'react'

function Settings(props) {

    const [themeName, setTheme] = useState('Тёмная');

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
                <div className='statistic'>
                    <p>Тема</p>
                    <Button text={themeName} fontsize="20px" onClick={()=>{
                        var root = document.getElementsByTagName( 'html' )[0];
                        var theme = root.getAttribute('theme')
                        if (theme == 'white') {
                            theme = 'dark'
                            setTheme('Тёмная')
                        } else {
                            theme = 'white'
                            setTheme('Светлая')
                        }
                        root.setAttribute( 'theme', theme );
                    }}/>
                </div>
                <p class="withlove">From Adapt Team with love</p>
            </div>
            <Button text="Сохранить" bg="#10BB92" color="#0F494A" fontsize="20px"/>
            </div>
        </div>
    )
}

export default Settings;