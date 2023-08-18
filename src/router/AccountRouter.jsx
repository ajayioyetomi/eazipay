import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { styled } from 'styled-components';
import { SideNav,AccountHeader,AccountFooter } from '../components';
import {Dashboard} from '../pages';

const AppRouter = () => {
  return (
    <>
      <Wrapper>
        <SideNav />    
        <MainContent>
            <AccountHeader />
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            <AccountFooter />
        </MainContent>
        
      </Wrapper>
    </>
  )
}

export default AppRouter;


const Wrapper = styled.main`
  position: fixed;
  width:100%;
  top:0;
  display: flex;
  height:100%;
  & > aside{
    width:230px;
    flex-shrink: 0;
    height:100%;
  }
  & > section{
    flex:1;
    height: 100%;;
  }

`;

const MainContent = styled.section`
  padding-top:55px;
  background-color: var(--main-back);

`