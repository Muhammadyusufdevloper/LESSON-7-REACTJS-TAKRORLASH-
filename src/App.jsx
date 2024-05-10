import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Product from './components/product'
import About from './components/about'
import Choose from './components/choose'
import Footer from './components/footer'
import Premium from './components/premium'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Product/>
        <About/>
        <Premium/>
        <Choose/>
      </main>
      <Footer/>
    </>
  )
}

export default App