import { HashRouter, NavLink } from "react-router-dom";
import Input from "../components/Input";
import Contact from "../components/Contact";
import Button from "../components/Button";
import Settingscomp from "../components/Settings_comp"

function Settings(props) {
    return (
        <HashRouter><div id=''>
            <div id='top' className='top'>
                <NavLink to="/settings"><Button icon="settings" /></NavLink>
                <Input icon="search" text="Поиск" />
            </div>
            <div id='contacts' className='concha'>

                <NavLink to="/fjdkjkd"><Contact
                    src="https://cdn.discordapp.com/attachments/650015284693958686/780472191014666252/Final.gif"
                    nickname="GreyDJ"
                    lastmsg="Ты заставлял меня сосать но я тебе не сосала, ты заставлял меня сосать но"
                    timemsg="10:32"
                    msgcounter="12" /></NavLink>

                <NavLink to="/"><Contact
                    src="https://i.imgur.com/H0lyGBF.jpeg"
                    nickname="quinque"
                    lastmsg="cock"
                    timemsg="10:32"
                    msgcounter="0" /></NavLink>
            </div>
        </div>
        <Settingscomp version={props.version}/>
        </HashRouter>
    )
}

export default Settings;