import { useState } from 'react'
import './index.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Foter from './components/5-foter/Foter'

function App() {
  return (
    <>
      <div className='body'>
        <h1>All fils</h1>
        <Header></Header>
        <Hero></Hero>
        <Main></Main>
        <Contact></Contact>
        <Foter></Foter>

      </div>

    </>
  )
}

export default App
