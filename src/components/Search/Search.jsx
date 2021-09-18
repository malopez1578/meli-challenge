import { Button } from '../Button/Button'
import style from './Search.module.scss'

const Search = () => {
  return (
    <label className={style['c-search']} htmlFor="searchProduct">
      <input
        className={style['c-search_field']}
        type="search"
        name="search"
        id="searchProduct"
        placeholder="Nunca dejes de buscar"
      />
      <Button icon="search" />
    </label>
  )
}

export { Search }
