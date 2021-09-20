const schemaProductDetails = (item, description) => {
  return {
    author: {
      name: 'Miguel',
      lastname: 'López',
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.base_price,
        decimals: 0,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  }
}

export { schemaProductDetails }
