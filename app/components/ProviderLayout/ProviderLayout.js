"use client"
import React from 'react'
import store from '@/app/store/store'
import { Provider } from 'react-redux'

function ProviderLayout({children}) {
  return (
    <>
    <Provider store={store}>
    {children}
    </Provider>
    </>
  )
}

export default ProviderLayout