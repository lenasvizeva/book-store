const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1) 
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  } 

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1) 
  ]
}

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id, 
    title = book.title, 
    count = 0,
    total = 0 
  } = item 

  return {
    id, 
    title,
    count: count + quantity,
    total: total + quantity*book.price 
  }
}

export const getTotal = (cartItems) => { 
  return ( 
    cartItems.reduce((acc, elem) => {
      return acc + elem.total
    }, 0) 
    
  )
}

const updateOrder = (state, bookId, quantity) => {
  const { bookList: {books}, shoppingCart: {cartItems} } = state 
  const book = books.find(({id}) => id === bookId)
  const itemIndex = cartItems.findIndex(({id}) => id === bookId) 
  const item = cartItems[itemIndex]
  let newItem = updateCartItem(book, item, quantity)
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex)

  return {
    cartItems: newCartItems,
    orderTotal: getTotal(newCartItems)
  }
}

const updateShoppingCart = (state, action) => {
  
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'BOOK_REMOVED_FROM_CART': 
      return updateOrder(state, action.payload, -1)
      
    case 'ALL_BOOKS_REMOVED_FROM_CART': 
      const {shoppingCart: {cartItems}} = state
      const item = cartItems.find(({id}) => id === action.payload)
      return updateOrder(state, action.payload, -item.count)
      
    default: 
      return state.shoppingCart
  }
}

export default updateShoppingCart