import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components'
import useQuery from '../../hooks/useQuery'
import { searchProducts } from '../../services/products.service'

const Search = () => {
  const { searchValue, setresearch, research } = useQuery('search')
  const { searchResult } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    searchValue && dispatch(searchProducts(searchValue))
    setresearch(!research)
  }, [dispatch, searchValue])

  return (
    <div className="o-section">
      {searchResult?.items?.length > 0 ? (
        searchResult.items.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </div>
  )
}

export default Search
