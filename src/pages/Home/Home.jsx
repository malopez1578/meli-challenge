import logo from '../../assets/images/Logo_ML@2x.png.png'
import { Search } from '../../components'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={`o-section ${style['c-section']}`}>
      <img src={logo} alt="logo mercado libre" />
      <Search />
    </div>
  )
}

export default Home
