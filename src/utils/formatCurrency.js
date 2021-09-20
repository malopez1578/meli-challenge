const formatCurrency = (currencyId, amount = 0) => {
  const intl = {}
  switch (currencyId) {
    case 'ARS':
      intl.symbol = '$'
      intl.decimals = 2
      break
    default:
      intl.symbol = '$'
      intl.decimals = 0
      break
  }
  return `${intl.symbol} ${amount
    .toFixed(intl.decimals)
    .replace(/\d(?=(\d{3})+\.)/g, '$&.')}`
}

export { formatCurrency }
