import React from 'react'
import Navigator from './navigation'
/** Redux store */
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App () {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}
