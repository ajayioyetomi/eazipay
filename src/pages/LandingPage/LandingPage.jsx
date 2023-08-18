import React from 'react'
import { styled } from 'styled-components';
import {Banner,Payroll,Work,SalarySection} from '.';

const LandingPage = () => {
  return (<>
    <Main>
      <Banner />
      <Payroll />
      <Work />
      <SalarySection />
    </Main>
  </>
    
  )
}

export default LandingPage;


const Main = styled.main`
    
`
