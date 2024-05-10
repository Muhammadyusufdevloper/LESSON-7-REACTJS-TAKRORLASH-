import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Product from './components/product'
import About from './components/about'
import Choose from './components/choose'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Product/>
        <About/>
        <Choose/>
      </main>
      <Footer/>
    </>
  )
}

export default App