import React from 'react'
import { styled } from 'styled-components';
import mask from '../../assets/pattern.png'
import dots from '../../assets/red-dots.png';
import pImg from '../../assets/payment-img.png';

const SalarySection = () => {
  return (
    <Wrapper>
        <img src={dots}/>
        <div>
            <div>
                <div></div>
                <p></p>
                <div></div>
            </div>
            <div>
                <img src={pImg} />
            </div>
        </div>
    </Wrapper>
  )
}

export default SalarySection;


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--pink-bg);
    height: 100vh;
    background-image: url(${mask});
    position: relative;
    & > img{
        position: absolute;
        top:0;
        left:50px;
    }
    & > div{
        width:var(--main-width);
        padding:20px;
        display: flex;
        justify-content: space-between;
        & > div{
            width:50%;
            &:nth-of-type(2){
                text-align: right;
                & > img{
                    width:90%;
                }
            }
        }
    }

    

`