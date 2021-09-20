const schemaSearchProducts = ({ items, categories }) => {
  return {
    author: {
      name: 'Miguel',
      lastname: 'López',
    },
    categories: categories,
    items: items.map(
      ({
        shipping,
        id,
        thumbnail,
        title,
        currency_id,
        price,
        condition,
        address,
      }) => {
        return {
          id,
          title,
          price: {
            currency: currency_id,
            amount: price,
            decimals: 0,
          },
          picture: thumbnail,
          condition,
          state_name: address.state_name,
          free_shipping: shipping.free_shipping,
        }
      }
    ),
  }
}

export { schemaSearchProducts }
