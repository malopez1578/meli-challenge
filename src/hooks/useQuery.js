import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const useQuery = (keyId) => {
  const query = new URLSearchParams(useLocation().search)
  const [research, setresearch] = useState(false)
  const [key, setkey] = useState(keyId)
  const [searchValue, setsearchValue] = useState('')

  useEffect(() => {
    setsearchValue(query.get(key))
  }, [key, query, research])

  return {
    searchValue,
    setkey,
    research,
    setresearch,
  }
}

export default useQuery
