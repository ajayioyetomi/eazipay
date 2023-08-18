import React from 'react';
import { styled } from 'styled-components';
import wave from '../../assets/wave.png';
import mask from '../../assets/mask.png';

const list = [
  {
    title:"Tamper-proof Payroll for LIfe",
    description:[
      'Your staff payroll history is kept in one place forever.',
      'No more excel sheet or manual records.',
      'Download your payroll history anytime you need it.'
    ],
  },
  {
    title:"All Payroll, Anytime Anywhere",
    description:[
      'Wherever you are Eazipay has got you covered on ALL your Payroll tasks.',
      'Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!'
    ],
  },
  {
    title:"Payroll in Seconds",
    description:[
      'Never again wil you spend more than 2 minutes on payroll.',
      'Just click on your staff annd bulk-pay them at once.',
      'Payment is done permanently.'
    ],
  }

]

const Payroll = () => {
  return (
    <Wrapper>
        <img src={wave} />
        <img src={mask} />
        <div>
          <div>
            <div>For Individuals and Businesses</div>
            <p>Join 200+ businesses using Eazipay's easy solution.</p>
          </div>
          <List>
            {list.map(({title,description})=>
              <div key={title}>
                <div>{title}</div>
                <div>
                  {description.map((eDes,index)=>
                    <p key={index}>{eDes}</p>
                  )}
                </div>
              </div>
            
            )}
          </List>
          <div>
            <p>
              We are happy to answer your queries. Please, reach us at <span className='red'>hello@myeazipay.com</span> and expect our response shortly after.
            </p>
          </div>

        </div>
    </Wrapper>
  )
}

export default Payroll;


const Wrapper = styled.section`
    height: 120vh;
    background-image: url(${mask});  
    position: relative;
    margin-top:-80px;
    display:flex;
    justify-content: center;
    align-items: center;
    & > img{
      left:0;
      top:0;
      width:100%;
      height:100%;
      position: absolute;
      object-position: center;
      &:nth-of-type(2){
        z-index: 1;
      }
    }  
    & > div{
      padding:10px 20px;
      display:grid;
      gap:50px;
      grid-template-columns: 1fr;
      width:var(--main-width);
      z-index:2;
      & > div:first-of-type{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:20px;
        & > div{
          font-size:var(--header-text);
          color:var(--dark-green);
          font-weight: 900;
          text-align: center;
        }
        & > p{
          margin:0;
          font-size:18px;
          font-family: var(--font-1);
          font-weight: 500;
          text-align: center;
        }
      }
      & > div:last-of-type{
        display: flex;
        justify-content: center;
        & > p{
          margin:0;
          font-family: var(--font-1);
          width:550px;
          line-height: 1.5;
          text-align: center;
          font-size:20px;
          & > span.red{
            color:var(--red-color);
          }
          @media screen and (width <= 890px) {
            font-size: 14px;
          }
        }
      }
    }
    @media screen and (width <= 890px) {
       height:fit-content;
       padding:110px 0;
       & > div{
        width:100% !important;
        & p{
          width:100% !important;
        }
       }
    }

`

const List = styled.div`
  position:relative;
  height:300px;
  & > div{
    color:var(--white-color);
    font-family: var(--font-1);
    background:linear-gradient(0deg, #11453B, #11453B),
    radial-gradient(50% 50% at 50% 50%, rgba(217, 235, 205, 0.14) 0%, rgba(217, 235, 205, 0.0266) 100%);
    box-shadow: var(--shadow-3);
    border-radius: 12px;
    padding:60px 40px 0;;
    display: flex;
    flex-direction: column;
    gap:20px;
    position:absolute;
    top:0;
    width:40%;
    height: 255px;
    transition: all 0.3s;
    &:hover{
      z-index:1;
      cursor: pointer;
    }

    & > div:first-of-type{
      font-weight:900;
      font-size:20px;
      height: fit-content;
    }
    & div:nth-of-type(2){
      display: flex;
      flex-direction: column;
      gap:10px;
    }
    & p{
      margin:0;
      font-size:13px;
      font-weight: 200;
    }
    &:first-of-type{
      left:0;
    }
    &:nth-of-type(2){
      left:30%;
    }
    &:last-of-type{
      right:0;
    }
    

  }
  @media screen and (width <= 890px) {
    height:fit-content;
    display:grid;
    grid-template-columns:1fr ;
    
    gap:20px;
    & > div{
      position: relative;
      top:unset;
      left:0 !important;
      width:100%;
      padding:30px;
      height: fit-content;
    }
  }
  

`