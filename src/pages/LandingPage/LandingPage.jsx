import React from 'react'
import { styled } from 'styled-components';
import {Banner,Payroll,Work,SalarySection,Form} from '.';

const LandingPage = () => {
  return (<>
    <Main>
      <Banner />
      <Payroll />
      <Work />
      <SalarySection />
      <Form />
    </Main>
  </>
    
  )
}

export default LandingPage;


const Main = styled.main`
    
`
