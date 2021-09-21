import { useState } from 'react'
import { useHistory } from 'react-router'
import { Button } from '../Button/Button'
import style from './Search.module.scss'

const Search = () => {
  const history = useHistory()
  const [search, setsearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    search && search !== '' && history.push(`/items?search=${search}`)
  }

  const clearText = (text) => {
    if (text && text !== '') {
      const newText = text.trim().replaceAll(' ', '+')
      return newText
    }
    return text
  }

  const handleOnChange = ({ target }) => {
    const value = clearText(target.value)
    setsearch(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={style['c-search']} htmlFor="searchProduct">
        <input
          className={style['c-search_field']}
          type="search"
          name="search"
          id="searchProduct"
          onChange={handleOnChange}
          placeholder="Nunca dejes de buscar"
        />
        <Button type="submit" icon="search" />
      </label>
    </form>
  )
}

export { Search }
