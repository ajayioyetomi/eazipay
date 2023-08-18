import React from 'react'
import { styled } from 'styled-components';
import {Banner,Payroll} from '.';

const LandingPage = () => {
  return (<>
    <Main>
      <Banner />
      <Payroll />
    </Main>
  </>
    
  )
}

export default LandingPage;


const Main = styled.main`
    
`
