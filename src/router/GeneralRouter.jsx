import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { LandingPage } from '../pages';
import { Header,Footer } from '../components';

const GeneralRouter = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<LandingPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default GeneralRouter;