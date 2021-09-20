import { memo } from 'react'
import logo from '../../assets/images/Logo_ML.png'
import { Search } from '../Search/Search'
import style from './Header.module.scss'

const _Header = () => {
  return (
    <header className={style['o-header']}>
      <img src={logo} alt="logo mercado libre" />
      <Search />
    </header>
  )
}

const Header = memo(_Header)

export { Header }
