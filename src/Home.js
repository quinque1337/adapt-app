import './Home.css';
import LogIn from './screens/login';
import LogInS2 from './screens/login_stage2';
import Register from './screens/register';
import Messenger from './screens/messenger';
import Empty from './screens/Empty_msg'
import Settings from './screens/Settings';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

  const [login, setLogin] = useState('')
  const [screen, openScreen] = useState(4)

  useEffect(()=>{
    if (login != '') {
      axios.get('https://blazer321.ru/api/user_registered/'+login).then((response)=>{
        response.data.response == true ? openScreen(3) : openScreen(2)
      })
    }
  }, [login])

  switch (screen) {

    case 0:
      return <Settings/>

    case 1:
      return <Empty/>

    case 2:
      return <Register
      h1="Мы еще не знакомы с вами"
      h2="Зарегистрируйся, пожалуйста ^^"/>

    case 3:
      return <LogInS2
      h1="Привет"
      user="Егор"
      h2="Введите свой пароль ниже" />

    case 4:
      return <LogIn
      h1="Привет" 
      h2="Введите свой логин ниже"
      setLogin={setLogin} />

    case 5:
      return <Messenger />
    default:
      return <LogIn
      h1="Привет" 
      h2="Введите свой пароль ниже" />
  }
}

export default Home;