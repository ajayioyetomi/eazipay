import React,{useState,useEffect} from 'react';
import { styled } from 'styled-components';
import greenDots from '../../assets/dark-dots.png';
import circles from '../../assets/circle.png';
import {Button} from '../../components';

const list_obj = [[
  {name:"firstname",type:'text',placeholder:"First Name"},
  {name:"lastname",type:'text',placeholder:"Last Name"},
  {name:"email",type:'email',placeholder:"Email"},
  {name:"job",type:'text',placeholder:"Job Title"},
  {name:"companysize",type:'number',placeholder:"Company Size"}],
  [
    {name:"companyname",type:'text',placeholder:"Company Name"},
    {name:"email",type:'text',placeholder:"Company Email"},
    {name:"industry",type:'text',placeholder:"Company Industry"},
    {name:"specialization",type:'text',placeholder:"Company Specialization"},
    {name:"companysize",type:'number',placeholder:"Company Size"}
  ]
]

const Form = () => {
  const [active,set_active] = useState(0);
  useEffect(()=>{
    set_active(0);
  },[])
  const handleActive = (arg,e)=>{
    e.preventDefault();
     set_active(arg);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  return (

    <Wrapper>
        <img src={greenDots}/>
        <img src={circles} />
        <div>
          <div>
            <div>
              Get an Exclusive Demo of Eazipay
            </div>
            <p>
              Our greatest priority is to put you and your business first. Let's show you how we can help.
            </p>
          </div>
          <div>
            <StyledForm onSubmit={handleSubmit}>
              <div>First thing first</div>
              <div>
                We want to serve you better. Tell us a bit about yourself or company
              </div>
              <div className='select'>
                <Button onClick={(e)=>handleActive(0,e)} className={active==0?'active':''}>Individual</Button>
                <Button onClick={(e)=>handleActive(1,e)} className={active==1?'active':''}>Company</Button>
              </div>
              <div className='fields'>
                {list_obj[active].map(({type,placeholder,name},index)=>
                  <input key={name} type={type} placeholder={placeholder} name={name} min="1" />
                )}
                
                <Button>
                  Request Demo
                </Button>
              </div>

            </StyledForm>
          </div>

        </div>
    </Wrapper>
  )
}

export default Form


const Wrapper = styled.section`
    position:relative;
    overflow:hidden;
    padding:80px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    & > img{
      &:first-of-type{
        position:absolute;
        left:0;
        top:70px;
        width:80px;

      }
      &:nth-of-type(2){
        position:absolute;
        right:0;
        top:0;
        width:250px;
        animation: animate-circle 0.5s linear infinite forwards alternate-reverse;
      }
      @media screen and (width <= 530px) {
        &:first-of-type{
          top:30px;
        }
      }
    }
    & > div{
      width: var(--main-width);
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:20px;
      & > div:first-of-type{
        width:450px;

        & > div{
          font-size:var(--header-text);
          color:var(--dark-green);
          font-weight:900;

        }
        & > p{
          margin:0;
          margin-top:30px;
          font-size:18px;
          font-weight:500;
          line-height:1.5;
          font-family: var(--font-1);
        }
      }
      @media screen and (width <= 890px) {
        flex-direction: column;
        gap:50px;
        & > div:first-of-type{
          /* width:500px; */
          & > div,& > p{
            text-align: center;
          }
          
        }
      }
      @media screen and (width <= 530px) {
        padding: 20px 0px;
        & > img:first-of-type{
          top:30px;
        }
        & > div:first-of-type{
          width:100% !important;
          & > div,& > p{
            text-align: center;
          }
          
        }
      }
    }

`

const StyledForm = styled.form`
    position:relative;
    z-index: 1;
    box-shadow: 0px 20px 48px 0px #AAAAAA4A;
    background-color: var(--white-color);
    display: grid;
    grid-template-columns: 1fr;
    width:400px;
    padding:30px 20px 20px;
    gap:20px;
    border-radius: 15px;
    justify-items: center;
    & > div:not(.fields,.select){
      text-align: center;
      font-family: var(--font-1);
      color:var(--text-color);
      &:first-of-type{
        font-weight: bold;
        font-size:25px;
      }
      &:nth-of-type(2){
        width:80%;
      }
    }
    & > div.fields{
      display: grid;
      width:100%;
      grid-template-columns: 1fr;
      gap:20px;
      & > input{
        width:100%;
        padding:10px;
        border-radius: 10px;
        border:1px solid #8D8E8D;
        outline:none;
      }

    }
    & > div.select{
      display:grid;
      width:100%;
      grid-template-columns: 1fr 1fr;
      padding:6px;
      gap:10px;
      border:1px solid #ddd;
      border-radius: 12px;
      & > button{
        border-radius: 10px;
        padding:10px 0;
        background-color: #eee;
        color:var(--text-color);
        transition: all 0.3s;
        &.active{
          background-color: var(--dark-green) !important;
          color:var(--white-color);
          box-shadow: var(--shadow);
        }
      }
    }
    @media screen and (width <= 530px) {
      width:100%;
    }

`