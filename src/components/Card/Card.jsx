import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/formatCurrency'
import style from './Card.module.scss'

const Card = ({ item }) => {
  return (
    <div className={style['c-card']}>
      <figure className={style['c-card_figure']}>
        <Link to={`/items/${item.id}`}>
          <img
            className={style['c-card_figure-img']}
            src={item.picture}
            alt={item.title}
          />
        </Link>
      </figure>
      <div className={style['c-card_desc']}>
        <p className={style['c-card_price']}>
          {formatCurrency(item?.price?.currency, item?.price?.amount)}
        </p>
        <Link className={style['c-card_title']} to={`/items/${item.id}`}>
          {item.title}
        </Link>
      </div>
      <div className={style['c-card_state']}>
        <p>{item.state_name}</p>
      </div>
    </div>
  )
}

export { Card }
