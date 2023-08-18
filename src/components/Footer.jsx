import React from 'react'
import { styled } from 'styled-components';
import logo from '../assets/logo-2.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/Twitter.png';
import sendImg from '../assets/send.png';
import { Link } from 'react-router-dom';
const list=[
  {
    head:"Product",
    list:[
      "Individual",
      "Businesses",
      "Request Demo",
      "Pricing"
    ]
  },{
    head:"Legal",
    list:[
      "Privacy Policies",
      "Terms of Services",
      
    ]

  },{
    head:"Product",
    list:[
      "FAQs",
      "Blog",
      "Career",
      "Customer Stories"
    ]

  }
]

const social_list = [
   instagram,twitter,linkedin,facebook

]

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src={logo} />
          <div>
            Copyright © 2023 Eazipay.
            <br/>All rights reserved
          </div>
          
          <div>
            {social_list.map((src,index)=>
              <img key={index} src={src} />
              )}
          </div>
        </div>
        <List>
          {list.map(({head,list})=>
            <div key={head}>
              <div>{head}</div>
              <div>
                {list.map(eLink=>
                <Link to="#" key={eLink}>
                  {eLink}
                </Link>)  
              }
              </div>
            </div>
          )}
        </List>

        <div>
          <div>Contact Us</div>
          <div>
            <Link to="#">eazipay@gmail.com</Link><br/><br/>
            <Link to="#">+234 816 878 9518</Link>
          </div>
          <div>
            <input type="email" placeholder='Your email address' />
            <img src={sendImg} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  display:flex;
  justify-content:center;
  align-items: center;
  font-family: var(--font-1);
  padding:30px 0;
  & > div{
    display: grid;
    width:var(--main-width);
    grid-template-columns: 1fr 2.4fr .9fr;
    gap:30px;
    padding:20px 0;
    & > div:first-of-type{
      display:flex;
      flex-direction: column;
      gap:30px;
      @media screen and (width <=767px){
          align-items: center;
        }
      & > img{
        width:120px;
      }
      & > div:last-of-type{
        width:180px;
        display:flex;
        justify-content: space-between;
        @media screen and (width <=767px){
          justify-content: center;
          width:100%;
          gap:20px;
        }
      }
    }
    & > div:last-of-type{
      display:flex;
      flex-direction: column;
      gap:30px;
      & > div:first-of-type{
        font-weight: bold;
      }
      & > div:nth-of-type(2){
        & > a{cursor: pointer;
          color:var(--text-color);
        }
      }

      & > div:last-of-type{
        position: relative;
        display: flex;
        align-items: center;
        & > input{
          width:100%;
          padding:10px 30px 10px 10px;
          border-radius: 30px;
          outline:none;
          border:none;
          font-size:13px;
          background-color: #ddd;
        }
        &>img{
          position: absolute;
          right:7px;
          z-index: 1;
          
        }
      }
    }
    @media screen and (width <= 767px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
`
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:20px;
  & > div{
    display: grid;
    grid-template-columns: 1fr;
    gap:12px;
    &> div:first-of-type{
      font-weight: bold;
    }
    & > div:nth-of-type(2){
      display: grid;
      grid-template-columns: 1fr;
      gap:6px;
      & > a{
        color:var(--text-color);
      }
      
    }

  }
  @media screen and (width <= 767px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  
`