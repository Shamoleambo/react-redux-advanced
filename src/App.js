import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { sendCartData } from './store/cart-actions'

let isInitital = true

function App() {
  const dispatch = useDispatch()
  const { cartIsVisible, notification } = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    if (isInitital) {
      isInitital = false
      return
    }

    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
