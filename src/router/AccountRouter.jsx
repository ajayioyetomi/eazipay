import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { LandingPage } from '../pages';
import { styled } from 'styled-components';
import { SideNav,AccountHeader,AccountFooter } from '../components';

const AppRouter = () => {
  return (
    <>
      <Wrapper>
        <SideNav />    
        <MainContent>
            <AccountHeader />
            <Routes>
              <Route path='/dashboard' element={<LandingPage />} />
            </Routes>
            <AccountFooter />
        </MainContent>
        
      </Wrapper>
    </>
  )
}

export default AppRouter;


const Wrapper = styled.main``;

const MainContent = styled.section`
  

`