import style from './Loadin.module.scss'

const Loading = () => {
  return (
    <div className={style['c-content']}>
      <div className={style['lds-grid']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export { Loading }
