import { Button } from '..'
import { formatCurrency } from '../../utils/formatCurrency'
import styles from './CardProduct.module.scss'

const CardProduct = ({ item }) => {
  return (
    <div className={styles['c-cardProduct']}>
      <figure className={styles['c-cardProduct_figure']}>
        <img
          className={styles['c-cardProduct_img']}
          src={item?.picture}
          alt={item?.title}
        />
      </figure>
      <div className={styles['c-cardProduct_info']}>
        <small className={styles['c-cardProduct_condition']}>
          {item?.condition}
        </small>
        <p className={styles['c-cardProduct_title']}>{item?.title}</p>
        <p className={styles['c-cardProduct_price']}>
          {formatCurrency(item?.price?.currency, item?.price?.amount)}
        </p>
        <Button type="primary" label="comprar" />
      </div>

      <div className={styles['c-cardProduct_desc']}>
        <h6 className={styles['c-cardProduct_desc-title']}>
          Descripción del producto
        </h6>
        <p className={styles['c-cardProduct_desc-text']}>{item?.description}</p>
      </div>
    </div>
  )
}

export { CardProduct }
