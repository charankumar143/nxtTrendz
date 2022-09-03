import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <>
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartListLength = cartList.length
        return (
          <div>
            <h1>Order Total</h1>

            <p>{cartListLength} Items in cart</p>
            <h1>total amount of the items in the cart</h1>
            <button type="button">Checkout</button>
          </div>
        )
      }}
    </CartContext.Consumer>
  </>
)

export default CartSummary
