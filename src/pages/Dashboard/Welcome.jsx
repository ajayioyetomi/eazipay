import React from 'react'
import { styled } from 'styled-components';

const Welcome = () => {
  return (
    <Wrapper>
        <div>Welcome Abasiama</div>
        <p>Pay and manage your employee in minutes</p>
    </Wrapper>
  )
}

export default Welcome;


const Wrapper = styled.div`
    color:var(--text-color);
    font-family: var(--font-1);
    & > div{
        font-weight: bold;
        font-size:40px;
    }
    & > p{
        margin:0;
        margin-top:6px;
        font-size: 18px;
    }
    

`