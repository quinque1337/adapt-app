import './Home.css';
import Button from './components/Button';
import Contact from './components/Contact';
import Input from './components/Input';

function Home() {
  return (
    <div id=''>
      <div id='top' className='top'>
        <Button icon="settings" />
        <Input icon="search" text="Поиск" />
      </div>
      <div id='contacts' className='concha'>
        <Contact 
        src="https://cdn.discordapp.com/attachments/650015284693958686/780472191014666252/Final.gif" 
        nickname="GreyDJ" 
        lastmsg="Ты заставлял меня сосать но я тебе не сосала, ты заставлял меня сосать но" 
        timemsg="10:32"/>
        <Contact 
        src="https://cdn.discordapp.com/attachments/650015284693958686/780472191014666252/Final.gif" 
        nickname="quinque" 
        lastmsg="гавмякщшлцутполщджвфыатполджфыватьполджвфаытполджыватполщдфвыатдшлирычвсапощдртьващжшплшзжфывазшжщпофувджщпть" 
        timemsg="10:32"/>
        <Contact 
        src="https://cdn.discordapp.com/attachments/650015284693958686/780472191014666252/Final.gif" 
        nickname="IsamiRi" 
        lastmsg="я люблю кофе" 
        timemsg="10:32"/>
        <Contact 
        src="https://cdn.discordapp.com/attachments/650015284693958686/780472191014666252/Final.gif" 
        nickname="Jine Raud" 
        lastmsg="Почему круг круглый?" 
        timemsg="10:32"/>
      </div>
    </div>
  );
}

export default Home;
