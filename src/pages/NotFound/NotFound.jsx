import style from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={style['c-not_found']}>
      <p className={style['c-not_found-text']}>
        Ooops! No hay resultados para su búsqueda
      </p>
    </div>
  )
}

export default NotFound
