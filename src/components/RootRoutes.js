import Main from "./pages/Main"
import Health from "./pages/Health"
import Fitokafe from "./pages/Fitokafe"
import Beauty from "./pages/Beauty"
import Success from "./pages/Success"
import Calendar from "./pages/Calendar"
import About from "./pages/About"
import Login from './pages/Login'
import Admin from './pages/Admin'
import Contacts from './pages/Contacts'
import Galery from './pages/Galery'
import NotFound from "./sections/404"

const Routes = [
  {
    path: '/',
    exact: true,
    title: 'Главная',
    component: Main,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/fitokafe',
    exact: true,
    title: 'Фитокафе',
    component: Fitokafe,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/health',
    exact: true,
    title: 'Здоровье',
    component: Health,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/beauty',
    exact: true,
    title: 'Красота',
    component: Beauty,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/success',
    exact: true,
    title: 'Аренда локаций',
    component: Success,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/calendar',
    exact: true,
    title: 'Календарь мероприятий',
    component: Calendar,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/about',
    exact: true,
    title: 'Партнёрство',
    component: About,
    animation: 'zoom-out-right',
    showInMenu: false
  },
  {
    path: '/contacts',
    exact: true,
    title: 'О нас',
    component: Contacts,
    animation: 'zoom-out-right',
    showInMenu: true
  },
  {
    path: '/galery',
    exact: true,
    title: 'Галерея',
    component: Galery,
    animation: 'zoom-out-right',
    showInMenu: false
  },
  {
    path: '/login',
    exact: true,
    title: 'Login',
    component: Login,
    animation: 'zoom-out-right',
    showInMenu: false
  },
  {
    path: '/admin',
    title: 'Admin',
    component: Admin,
    private: true,
    showInMenu: false
  },
  {
    component: NotFound,
    animation: 'zoom-out-right'
  }
]

export default Routes