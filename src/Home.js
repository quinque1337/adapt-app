import './Home.css';
import LogIn from './screens/login';
import LogIn_S2 from './screens/login_stage2';
import Register from './screens/register';
import Messenger from './screens/messenger';
import Empty from './screens/Empty_msg'
import Settings from './screens/Settings';

function Home() {

  let screen = 5

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
      return <LogIn_S2
      h1="Привет"
      user="Егор"
      h2="Введите свой пароль ниже" />

    case 4:
      return <LogIn
      h1="Привет" 
      h2="Введите свой пароль ниже" />

    case 5:
      return <Messenger />

  }
}

export default Home;