import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CardProduct } from '../../components'
import { getProductsById } from '../../services/product.service'

const Product = () => {
  const { id } = useParams()
  const { product } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    id && dispatch(getProductsById(id))
  }, [id])

  return (
    <div className="o-section">
      {product ? <CardProduct item={product.item} /> : <></>}
    </div>
  )
}

export default Product
