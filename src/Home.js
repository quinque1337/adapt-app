import './Home.css';
import LogIn from './screens/login';
import LogInS2 from './screens/login_stage2';
import Register from './screens/RegisterScreen';
import Messenger from './screens/messenger';
import Empty from './screens/Empty_msg'
import Settings from './screens/Settings';
import { useEffect, useState } from 'react';
import axios from 'axios';

var public_version = false
var tested_version = false
var version = '1.6'
var version_string = ''

// пиздец что это
if (!tested_version) {public_version ? version_string+='_beta' : version_string+='_alpha'}
else {public_version ? version_string+='_prod' : version_string+='_rc'}
version_string+='_'+process.env.NODE_ENV.slice(0, 3)

var version_string = version+version_string

function Home() {

  // Данные для проверки логина и последующей регистрации
  const [login, setLogin] = useState('')
  const [screen, openScreen] = useState(0)
  const [loginInputError, setLoginInputError] = useState('');

    // Данные для регистрации
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const [returnreg, ReturnRegister] = useState(false)

  const [theme, setTheme] = useState('')

  // проверка логина
  useEffect(()=>{
    if (login !== '' && login !== undefined) {
      console.log(login)
      axios.get('https://blazer321.ru/api/user_registered/'+login).then((response)=>{
        response.data.response === true ? openScreen(3) : openScreen(2)
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data.response === false) {
            openScreen(2)
          }
        } else if (error.request) {
          alert('Произошла ошибка при доступе к API');
        } else {
          // Something happened in setting up the request that triggered an Error
          alert('Error', error.message);
        }
      });
    } else if (login === undefined) {
        setLoginInputError('Черкасов лох')
    }
  }, [login]);

  useEffect(()=>{
    console.log(nickname, password, register)
    if (nickname !== '' && password !== '' && register) {
      axios.post('https://blazer321.ru/api/register_user', {
        login: login,
        name: nickname,
        password: password
      })
    }
  }, [nickname, password, register, login]);
  // экраны
  switch (screen) {

    case 0:
      return <Settings version={version_string}/>

    case 1:
      return <Empty/>

    case 2:
      return <Register
      h1="Мы еще не знакомы с вами"
      h2={`Зарегистрируйся, пожалуйста, ${login}`}
      setNickname={setNickname}
      setPassword={setPassword}
      setRegister={setRegister}/>

    case 3:
      return <LogInS2
      h1="Привет"
      user="Егор"
      h2="Введите свой пароль ниже" />

    case 4:
      return <LogIn
      h1="Привет" 
      h2="Введите свой логин ниже"
      label={loginInputError}
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