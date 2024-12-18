import './Home.css';
import LogIn from './screens/login';
import LogInS2 from './screens/login_stage2';
import Register from './screens/RegisterScreen';
import Messenger from './screens/messenger';
import Empty from './screens/Empty_msg'
import Settings from './screens/Settings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

var public_version = false
var tested_version = false
var version = '0.13'
var version_string = ''

// пиздец что это
if (!tested_version) {public_version ? version_string+='_beta' : version_string+='_alpha'}
else {public_version ? version_string+='_prod' : version_string+='_rc'}
version_string+='_'+process.env.NODE_ENV

var version_string = version+version_string

function Home() {

  // Данные для проверки логина и последующей регистрации
  const [login, setLogin] = useState('')
  const [screen, openScreen] = useState(4)
  const [loginInputError, setLoginInputError] = useState('');

    // Данные для регистрации
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [passwordOnLogin, setPasswordOnLogin] = useState('');
  const [label, setLabel] = useState('');
  const cookies = new Cookies();
  const [loginInputError2, setlogin2inputerror] = useState('');
  const [returnreg, setReturn] = useState(false);
  const [exit_user, setExit] = useState(false);

  useEffect(()=>{
    if (returnreg == true) {
      openScreen(4);
      return setReturn(false);
    }
  })

  useEffect(()=>{
    if (cookies.get('token') && cookies.get('token') != 'undefined') {
      openScreen(1);
    }
  })

  useEffect(()=>{
    if (exit_user == true) {
      openScreen(4);
      cookies.remove('token');
      return setExit(false);
    }
  })

  useEffect(()=>{
    if (passwordOnLogin != '') {
      axios.post('https://adapt-messenger.ru/api/get_token', {
        login: login,
        password: passwordOnLogin
      })
      .then((response)=>{
        cookies.set('token', response.data.token);
        openScreen(1)
      })
      .catch((error)=>{
        if (error.response) {
          if (error.response.data.response === false) {
            openScreen(2)
          } else {
            setlogin2inputerror(error.response.data.response)
          }
        } else {
          setlogin2inputerror('Ошибка соединения с API')
        }
      })
    }
  }, [passwordOnLogin])

  // проверка логина
  useEffect(()=>{
    if (login !== '' && login !== undefined) {
      console.log(login)
      axios.get('https://adapt-messenger.ru/api/user_registered/'+login).then((response)=>{
        response.data.response === true ? openScreen(3) : openScreen(2)
        cookies.set('token', response.data.token);
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data.response === false) {
            openScreen(2)
          } else {
            setLoginInputError(error.response.data.response)
          }
        } else {
            setLoginInputError('Ошибка соединения с API')
        }
      });
    } else if (login === undefined) {
        setLoginInputError('Введи что-нибудь')
    }
  }, [login]);

  useEffect(()=>{
    console.log(nickname, password, register)
    if (nickname !== '' && password !== '' && register) {
      axios.post('https://adapt-messenger.ru/api/register_user', {
        login: login,
        name: nickname,
        password: password
      })
      .then(()=>{
        axios.post('https://adapt-messenger.ru/api/get_token', {
          login: login,
          password: password
        })
        .then((response)=>{
          cookies.set('token', response.data.token);
          openScreen(1)
        })
      })
      .catch((error)=>{
        if (error.response) {
          setLabel(error.response.data.response)
          setRegister(false)
        }
      })
    }
  }, [nickname, password, register, login]);
  // экраны
  switch (screen) {

    case 0:
      return <div>deprecated</div>

    case 1:
      return <Empty 
      Exit = {setExit}
      version={version_string}/>

    case 2:
      return <Register
      label={label}
      h1="Мы еще не знакомы с вами"
      h2={`Зарегистрируйся, пожалуйста, ${login}`}
      setNickname={setNickname}
      setPassword={setPassword}
      setRegister={setRegister}/>

    case 3:
      return <LogInS2
      type="password"
      h1="Привет"
      user={login}
      h2="Введите свой пароль ниже"
      setLogin={setPasswordOnLogin}
      label={loginInputError2}
      Return={setReturn} />

    case 4:
      return <LogIn
      h1="Привет" 
      h2="Введите свой логин ниже"
      label={loginInputError}
      setLogin={setLogin} />

    default:
      return <LogIn
      h1="Привет" 
      h2="Введите свой пароль ниже" />
  }
}

export default Home;
