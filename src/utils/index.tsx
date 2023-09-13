export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
