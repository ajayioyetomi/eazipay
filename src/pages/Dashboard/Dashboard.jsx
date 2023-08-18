import React from 'react';
import {Welcome} from '.';
import { styled } from 'styled-components';

const Dashboard = () => {
  return (
    <Wrapper>
        <div>
            <Welcome />
        </div>      
    </Wrapper>
  )
}

export default Dashboard;


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding:50px 0;
    & > div{
        width:var(--account-width);
    }

`